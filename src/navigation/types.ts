import {NavigationProp} from '@react-navigation/native';
import {Announcement} from '../redux/announcement/announcementSlice';
import {ProfileState} from '../redux/profile/profileSlice';
import {CabinetTypes} from '../redux/cabinet/cabinetSlice';

export enum Routes {
  NewCabinet = 'NewCabinet',
  TabNavigator = 'TabNavigator',
  AuthorizationScreen = 'AuthorizationScreen',
  SearchScreen = 'SearchScreen',
  AuthorizationRegisterScreen = 'AuthorizationRegisterScreen',
  ProfileScreen = 'ProfileScreen',
  FavoriteScreen = 'FavoriteScreen',
  AuthorizationTypeScreen = 'AuthorizationTypeScreen',
  OrganizationManagerScreen = 'OrganizationManagerScreen',
  NewAnnouncement = 'NewAnnouncement',
  AnimalInfo = 'AnimalInfo',
  OrganizationInfo = 'OrganizationInfo',
  ShelterList = 'ShelterList',
  ShelterInfo = 'ShelterInfo',
}

export type ExtendedNavigationProp = NavigationProp<
  RootStackParamList & RootTabParamList
> & {
  replace: <name extends keyof (RootStackParamList & RootTabParamList)>(
    name: name,
    params?: (RootStackParamList & RootTabParamList)[name],
  ) => void;
  push: <name extends keyof (RootStackParamList & RootTabParamList)>(
    name: name,
    params?: (RootStackParamList & RootTabParamList)[name],
  ) => void;
};

export type RootTabParamList = {
  [Routes.SearchScreen]: undefined;
  [Routes.ProfileScreen]: undefined;
  [Routes.FavoriteScreen]: undefined;
  [Routes.OrganizationManagerScreen]: undefined;
  [Routes.ShelterList]: undefined;
};

export type RootStackParamList = {
  [Routes.TabNavigator]: undefined;
  [Routes.NewAnnouncement]: undefined | Announcement;
  [Routes.AnimalInfo]: Announcement;
  [Routes.ShelterInfo]: CabinetTypes;
  [Routes.OrganizationInfo]: ProfileState;
  [Routes.NewCabinet]: undefined;
};

export type AuthorizationParamList = {
  [Routes.AuthorizationScreen]: undefined;
  [Routes.AuthorizationRegisterScreen]: undefined;
  [Routes.AuthorizationTypeScreen]: undefined;
};
