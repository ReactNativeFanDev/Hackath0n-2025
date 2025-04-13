import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {logout} from '../../../redux/auth/authThunks';
import {ProfileState} from '../../../redux/profile/profileSlice';
import {useCallback, useEffect, useState} from 'react';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../../navigation/types';
import {getUserAnnouncements} from '../../../redux/announcement/announcementThunks';
import {Announcement} from '../../../redux/announcement/announcementSlice';
import {changeProfileData} from '../../../redux/profile/profileThunks';
import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface UseTranslatedResult extends ProfileState {
  logOutPressHandler: () => void;
  userAnnouncements: Announcement[];
  userNameState: string;
  setUserNameState: (name: string) => void;
  contactEmail: string;
  setContactEmail: (email: string) => void;
  donateUrl: string;
  setDonateUrl: (email: string) => void;
  saveChangeInProfile: () => void;
  changeAvatarPressHandler: () => void;
  avatarCurrent: string;
  editMyPost: (item: Announcement) => void;
}

export default function useHook(): UseTranslatedResult {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const {
    userName,
    email,
    avatar,
    description,
    phone,
    location,
    type,
    donate,
    category,
  } = useAppSelector(state => state.profile);
  const [userNameState, setUserNameState] = useState(userName);
  const [contactEmail, setContactEmail] = useState(email);
  const [donateUrl, setDonateUrl] = useState(donate);
  const [avatarCurrent, setAvatarCurrent] = useState(avatar);
  const userAnnouncements = useAppSelector(
    state => state.announcement.userAnnouncements,
  );

  function logOutPressHandler() {
    dispatch(logout());
  }

  async function changeAvatarPressHandler() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result?.assets) {
      setAvatarCurrent(result.assets[0].uri);
    }
  }

  async function editMyPost(item: Announcement) {
    navigation.navigate(Routes.NewAnnouncement, item);
  }

  useEffect(() => {
    navigation.setOptions({
      title: type?.toUpperCase(),
    });
  });

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserAnnouncements());
    }, [dispatch]),
  );

  function saveChangeInProfile() {
    Alert.alert('Are you sure?', 'Do you want to save the changes?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'OK',
        onPress: () => {
          dispatch(
            changeProfileData({
              email: contactEmail ? contactEmail : '',
              userName: userNameState ? userNameState : '',
              donate: donateUrl ? donateUrl : '',
              avatar: avatarCurrent ? avatarCurrent : '',
            }),
          );
        },
      },
    ]);
  }

  return {
    logOutPressHandler,
    userAnnouncements,
    userName,
    email,
    avatar,
    description,
    phone,
    category,
    type,
    location,
    donate,
    userNameState,
    setUserNameState,
    contactEmail,
    setContactEmail,
    donateUrl,
    setDonateUrl,
    saveChangeInProfile,
    avatarCurrent,
    editMyPost,
    changeAvatarPressHandler,
  };
}
