import {Alert} from 'react-native';

interface SerializedError {
  name?: string;
  message: string;
  code?: string;
  stack?: string;
}

interface UnexpectedError {
  data?: string;
  status: string;
  statusText?: string;
}

function instanceOfSerializedError(error: any): error is SerializedError {
  return error && typeof error === 'object' && 'message' in error;
}

function instanceOfUnexpectedError(error: any): error is UnexpectedError {
  return (
    error &&
    typeof error === 'object' &&
    'status' in error &&
    typeof error.data === 'string'
  );
}

export function handleBaseError(error: unknown): string {
  let errorMessage = 'Щось пішло не так';

  if (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    typeof error.response === 'object'
  ) {
    console.log(
      '📌 Server Error Response:',
      JSON.stringify((error as any).response.data, null, 2),
    );

    if (instanceOfUnexpectedError((error as any).response)) {
      errorMessage = `Серверна помилка ${
        (error as any).response.status
      }: ${JSON.stringify((error as any).response.data)}`;
    } else if (instanceOfSerializedError((error as any).response.data)) {
      errorMessage = (error as any).response.data.message;
    } else if ((error as any)?.response?.data?.result?.message) {
      errorMessage = (error as any).response.data.result.message;
    }
  } else if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    (error as any).message === 'Network Error'
  ) {
    errorMessage =
      "Помилка виконання запиту. Перевірте наявність інтернет-з'єднання.";
  } else {
    errorMessage =
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as any).message
        : 'Щось пішло не так';
  }

  // 🔹 Вивід помилки в Alert
  Alert.alert('Error', errorMessage, [{text: 'OK', style: 'cancel'}]);

  return errorMessage;
}
