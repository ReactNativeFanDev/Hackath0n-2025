import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../../redux/store';
import {
  createNewAnnouncement,
  deleteAnnouncementById,
  updateAnnouncementById,
} from '../../../redux/announcement/announcementThunks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import {Announcement} from '../../../redux/announcement/announcementSlice';

interface UseTranslatedResult {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  sex: 'Male' | 'Female';
  setSex: React.Dispatch<React.SetStateAction<'Male' | 'Female'>>;
  species: string;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
  breed: string;
  setBreed: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  ageType: 'Month' | 'Year';
  setAgeType: React.Dispatch<React.SetStateAction<'Month' | 'Year'>>;
  error: boolean;
  photoArr: Asset[];
  nextPressHandler: () => void;
  pickImagePressHandler: () => Promise<void>;
  healthCondition: string;
  setHealthCondition: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  saveChanges: () => void;
  deletePressHandler: () => void;
  donate: string;
  setDonate: (url: string) => void;
}

export default function useHook(
  announcement: Announcement | undefined = {} as Announcement,
): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState(announcement?.name ?? '');
  const [sex, setSex] = useState<'Male' | 'Female'>(
    announcement ? announcement.sex : 'Male',
  );
  const [species, setSpecies] = useState(
    announcement ? announcement.species : '',
  );
  const [breed, setBreed] = useState(announcement ? announcement.breed : '');
  const [age, setAge] = useState(announcement ? announcement.age : '');
  const [ageType, setAgeType] = useState<'Month' | 'Year'>(
    announcement ? announcement.ageType : 'Month',
  );
  const [photoArr, setPhotoArr] = useState<Asset[]>(
    announcement ? announcement.photoArr : [],
  );
  const [healthCondition, setHealthCondition] = useState(
    announcement ? announcement.healthCondition : '',
  );
  const [error, setError] = useState(false);
  const [description, setDescription] = useState(
    announcement ? announcement.description : '',
  );
  const [donate, setDonate] = useState(announcement ? announcement.donate : '');

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
            dispatch(
              deleteAnnouncementById({
                userId: announcement.userId,
                announcementId: announcement.id,
              }),
            ).then(() => navigation.goBack());
          },
        },
      ]);
    } else {
      Alert.alert('Error', 'Missing userId or announcementId');
    }
  }

  function saveChanges() {
    dispatch(
      updateAnnouncementById({
        sex,
        species,
        breed,
        age,
        photoArr,
        name,
        healthCondition,
        ageType,
        description,
        userId: announcement.userId,
        announcementId: announcement.id,
        donate: donate,
      }),
    ).then(props => Alert.alert('Saved'));
  }

  function nextPressHandler() {
    if (
      species &&
      breed &&
      age &&
      ageType &&
      description &&
      healthCondition &&
      photoArr.length > 0
    ) {
      setError(false);
      dispatch(
        createNewAnnouncement({
          sex,
          species,
          breed,
          age,
          photoArr,
          name,
          healthCondition,
          ageType,
          description,
          donate,
        }),
      ).then(props => {
        if (props.payload) {
          navigation.goBack();
        } else {
        }
      });
    } else {
      setError(true);
      Alert.alert('Error', 'You did not fill in all the required fields');
    }
  }

  async function pickImagePressHandler() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 5,
    });

    if (result?.assets) {
      setPhotoArr(result.assets);
    }
  }

  return {
    name,
    setName,
    sex,
    setSex,
    species,
    setSpecies,
    breed,
    setBreed,
    age,
    setAge,
    ageType,
    setAgeType,
    error,
    photoArr,
    healthCondition,
    setHealthCondition,
    nextPressHandler,
    pickImagePressHandler,
    description,
    donate,
    setDonate,
    deletePressHandler,
    saveChanges,
    setDescription,
  };
}
