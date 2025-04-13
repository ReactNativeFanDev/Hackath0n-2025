import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {useCallback, useState} from 'react';
import {getAllCabinets} from '../../../redux/cabinet/cabinetThunks';
import {CabinetTypes} from '../../../redux/cabinet/cabinetSlice';

interface UseTranslatedResult {
  filteredCabinets: CabinetTypes[];
  openAnimal: (props: CabinetTypes) => void;
  location: string;
  setLocation: (location: string) => void;
}

export default function useHook(): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState('');

  const announcement = useAppSelector(state => state.cabinet.cabinets);

  const filteredCabinets = announcement.filter(item => {
    if (location && item.location !== location) {
      return false;
    }

    return true;
  });

  function openAnimal(props: CabinetTypes) {
    navigation.navigate(Routes.ShelterInfo, props);
  }
  //changeSearchState

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllCabinets());
    }, [dispatch]),
  );

  return {
    filteredCabinets,
    openAnimal,
    location,
    setLocation,
  };
}
