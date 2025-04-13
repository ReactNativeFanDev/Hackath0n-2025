import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {useCallback, useState} from 'react';
import {getAllAnnouncements} from '../../../redux/announcement/announcementThunks';
import {Announcement} from '../../../redux/announcement/announcementSlice';

interface UseTranslatedResult {
  filteredAnnouncement: Announcement[];
  openAnimal: (props: Announcement) => void;
  location: string;
  setLocation: (location: string) => void;
  age: string;
  setAge: (age: string) => void;
  health: string;
  setHealth: (health: string) => void;
}

export default function useHook(): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [health, setHealth] = useState('');

  const announcement = useAppSelector(
    state => state.announcement.searchAnnouncements,
  );

  const filteredAnnouncement = announcement.filter(item => {
    if (location && item.location !== location) {
      return false;
    }

    if (age && item.age !== age) {
      return false;
    }

    if (health && item.healthCondition !== health) {
      return false;
    }

    return true;
  });

  function openAnimal(props: Announcement) {
    navigation.navigate(Routes.AnimalInfo, props);
  }
  //changeSearchState

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllAnnouncements());
    }, [dispatch]),
  );

  return {
    filteredAnnouncement,
    openAnimal,
    location,
    setLocation,
    age,
    setAge,
    health,
    setHealth,
  };
}
