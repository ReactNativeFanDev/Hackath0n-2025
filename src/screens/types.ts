import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootTabParamList = {
  ChatsListScreen: any;
  MyProfileScreen: any;
  SearchScreen: any;
};

type RootStackParamList = {
  AuthorizationScreen: any;
  ChatScreen: { chatId: string };
};

export type PropsChatsListScreen = NativeStackScreenProps<
  RootTabParamList,
  'ChatsListScreen'
>;
export type PropsMyProfileScreen = NativeStackScreenProps<
  RootTabParamList,
  'MyProfileScreen'
>;
export type PropsReviewScreen = NativeStackScreenProps<
  RootStackParamList,
  'AuthorizationScreen'
>;
