import {Alert, Linking} from 'react-native';
import {fetchUserProfile} from '../../../redux/profile/profileThunks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../navigation/types';
import {CabinetTypes} from '../../../redux/cabinet/cabinetSlice';

interface UseTranslatedResult {
  infoPressHandler: () => void;
  openEmailPressHandler: () => void;
  donatePressHandler: () => void;
}

export default function useHook({
  donate,
  email,
  userId,
}: CabinetTypes): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  async function infoPressHandler() {
    try {
      const userData = await fetchUserProfile(userId);

      if (userId && userData) {
        navigation.navigate(Routes.OrganizationInfo, {...userData});
      } else {
        Alert.alert('Failed to fetch user data');
      }
    } catch (error) {
      Alert.alert('Error fetching user data:', 'No internet connection');
    }
  }

  function openEmailPressHandler() {
    const subject = 'доброго дня';
    const body = 'Хочу повідомити вас, що я зацікавлений в..';

    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('Помилка', 'Не вдалося відкрити поштовий клієнт.'),
    );
  }

  function donatePressHandler() {
    Linking.openURL(donate).catch(err =>
      console.error('Failed to open URL:', err),
    );
  }

  return {infoPressHandler, openEmailPressHandler, donatePressHandler};
}
