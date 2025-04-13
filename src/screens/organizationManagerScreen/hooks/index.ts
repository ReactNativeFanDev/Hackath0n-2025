import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {Announcement} from '../../../redux/announcement/announcementSlice';
import {useCallback} from 'react';
import {getUserAnnouncements} from '../../../redux/announcement/announcementThunks';
import {getUserCabinets} from '../../../redux/cabinet/cabinetThunks';
import {CabinetTypes} from '../../../redux/cabinet/cabinetSlice';

interface UseTranslatedResult {
  addAnnouncementPressHandler: () => void;
  userAnnouncements: Announcement[];
  addNewCabinetPressHandler: () => void;
  userCabinets: CabinetTypes[];
}

// interface PropsParams {}

export default function useHook(): UseTranslatedResult {
  const userAnnouncements = useAppSelector(
    state => state.announcement.userAnnouncements,
  );

  const userCabinets = useAppSelector(state => state.cabinet.userCabinets);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  function addAnnouncementPressHandler() {
    navigation.navigate(Routes.NewAnnouncement);
  }

  function addNewCabinetPressHandler() {
    navigation.navigate(Routes.NewCabinet);
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserAnnouncements());
      dispatch(getUserCabinets());
    }, [dispatch]),
  );

  return {
    addAnnouncementPressHandler,
    addNewCabinetPressHandler,
    userAnnouncements,
    userCabinets,
  };
}
