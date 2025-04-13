import {createAsyncThunk} from '@reduxjs/toolkit';
import {generateKey} from '../../utils/aesCrypt/generateKey';
import {auth, db} from '../../utils/firebase/firebaseConfig';
import {child, get, push, ref, set} from '@firebase/database';
import {handleBaseError} from '../../utils/errorHandler'; // Додати функцію обробки помилок

export const fetchSearchResults = createAsyncThunk(
  'search/fetchResults',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState() as {
        search: {searchState: boolean; searchType: string};
      };

      const userId = auth.currentUser?.uid;
      if (
        !userId ||
        state.search.searchType !== 'People' ||
        !state.search.searchState
      ) {
        console.log('quit');
        return null; // Якщо користувача немає або пошук не активний, виходимо
      }

      // Отримуємо список користувачів у пошуку
      const snapshot = await get(ref(db, '/searchPeople'));
      const data = snapshot.val();
      if (!data) return null; // Якщо немає активних користувачів, виходимо

      // Фільтруємо користувачів, виключаючи поточного
      const userArray = Object.entries(data).filter(
        ([key, value]) => key !== userId && value === true,
      );

      if (userArray.length === 0) return null; // Якщо немає кого підключати, виходимо

      // Створюємо новий чат
      const chatRef = push(ref(db, 'chats'));
      await set(ref(db, `searchPeople/${userArray[0][0]}`), chatRef.key);

      const encryptionKey = await generateKey(10, 256);
      await set(ref(db, `chats/${chatRef.key}/key`), encryptionKey);

      await set(
        child(ref(db, `chats/${chatRef.key}/participants`), 'user1'),
        userId,
      );
      await set(
        child(ref(db, `chats/${chatRef.key}/participants`), 'user2'),
        userArray[0][0],
      );

      return chatRef.key; // Повертаємо ID чату
    } catch (error) {
      const errorMessage = handleBaseError(error);
      return rejectWithValue(errorMessage);
    }
  },
);
