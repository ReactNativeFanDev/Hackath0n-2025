import {useState} from 'react';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import {createNewCabinet} from '../../../redux/cabinet/cabinetThunks';
import {CabinetTypes} from '../../../redux/cabinet/cabinetSlice';

interface UseTranslatedResult {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  donate: string;
  setDonate: (url: string) => void;
  number: string;
  setNumber: (number: string) => void;
  email: string;
  setEmail: (mail: string) => void;
  location: string;
  setLocation: (location: string) => void;
  error: boolean;
  nextPressHandler: () => void;
  saveChanges: () => void;
  deletePressHandler: () => void;
}

export default function useHook(
  cabinet: CabinetTypes | undefined = {} as CabinetTypes,
): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState(cabinet?.name ?? '');
  const [location, setLocation] = useState(cabinet?.name ?? '');
  const [donate, setDonate] = useState(cabinet?.donate ?? '');
  const [number, setNumber] = useState(cabinet?.number ?? '');
  const [email, setEmail] = useState(cabinet?.email ?? '');

  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  function deletePressHandler() {
    if (announcement?.userId && announcement?.id) {
      Alert.alert('Confirmation', 'Are you sure?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // dispatch(
            //   deleteAnnouncementById({
            //     userId: announcement.userId,
            //     announcementId: announcement.id,
            //   }),
            // ).then(() => navigation.goBack());
          },
        },
      ]);
    } else {
      Alert.alert('Error', 'Missing userId or announcementId');
    }
  }

  function saveChanges() {}

  function nextPressHandler() {
    if (name && donate && number && email && location) {
      setError(false);
      dispatch(
        createNewCabinet({
          name,
          donate,
          number,
          email,
          location,
        }),
      ).then(props => {
        if (props) {
          Alert.alert('Done');
          navigation.goBack();
        }
      });
    } else {
      setError(true);
      Alert.alert('Error', 'You did not fill in all the required fields');
    }
  }

  return {
    name,
    setName,
    donate,
    setDonate,
    number,
    setNumber,
    email,
    setEmail,
    error,
    nextPressHandler,
    deletePressHandler,
    saveChanges,
    location,
    setLocation,
  };
}
