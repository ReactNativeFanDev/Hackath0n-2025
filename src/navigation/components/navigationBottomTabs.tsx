import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList, Routes} from '../types';
import {iconSize} from './styles';
import {GlobalColors, size} from '../../constants/Global';
import ChatSvg from '../../assets/svg/navigation/chatSvg.tsx';
import ProfileSvg from '../../assets/svg/navigation/profileSvg.tsx';
import HeartSvg from '../../assets/svg/navigation/heartSvg.tsx';
import FavoriteScreen from '../../screens/favoriteScreen/index.tsx';
import ProfileScreen from '../../screens/profileScreen/index.tsx';
import SettingsHeaderButton from '../../components/authorizationComponents/navigationComponents/settingsHeaderButton/index.tsx';
import SearchScreen from '../../screens/searchScreen/index.tsx';
import OrganizationManagerScreen from '../../screens/organizationManagerScreen/index.tsx';
import {useAppSelector} from '../../redux/store.tsx';
import NavigationSearchBar from '../../components/authorizationComponents/navigationComponents/navigationSearchBar/index.tsx';
import ShelterSvg from '../../assets/svg/navigation/shelter.tsx';
import ShelterList from '../../screens/shelterList/index.tsx';

const Tab = createBottomTabNavigator<RootTabParamList>();

const ChatsListScreenIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <ChatSvg width={iconSize} height={iconSize} fill={color} />;

const FavoriteScreenIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <HeartSvg width={iconSize} height={iconSize} fill={color} focused={focused} />
);

const ProfileScreenIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <ProfileSvg width={iconSize} height={iconSize} fill={color} />;

const ShelterIcon = ({focused, color}: {focused: boolean; color: string}) => (
  <ShelterSvg size={iconSize} fill={color} />
);

export const NavigationBottomTabs = (): React.JSX.Element => {
  const profile = useAppSelector(state => state.profile.type);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {flex: 1},
        tabBarStyle: {
          paddingBottom: 0,
          backgroundColor: GlobalColors.primary,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: GlobalColors.activeColor,
      }}>
      {profile === 'Volunteer' ? (
        <Tab.Screen
          name={Routes.SearchScreen}
          component={SearchScreen}
          options={{
            tabBarIcon: ChatsListScreenIcon,
            title: '',
            headerStyle: {backgroundColor: GlobalColors.background},
            headerTitle() {
              return <NavigationSearchBar />;
            },
          }}
        />
      ) : (
        <Tab.Screen
          name={Routes.OrganizationManagerScreen}
          component={OrganizationManagerScreen}
          options={{
            tabBarIcon: ChatsListScreenIcon,
            title: 'Management',
            headerTitleStyle: {
              fontSize: size(17),
              marginLeft: Dimensions.get('screen').width * 0.05,
              textTransform: 'uppercase',
              color: GlobalColors.textInBackground,
            },
            headerStyle: {backgroundColor: GlobalColors.background},
            headerTitleAlign: 'left',
          }}
        />
      )}

      {profile === 'Volunteer' && (
        <Tab.Screen
          name={Routes.ShelterList}
          component={ShelterList}
          options={{
            tabBarIcon: ShelterIcon,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: size(15),
              textAlign: 'left',
              textTransform: 'uppercase',
              color: GlobalColors.textInBackground,
            },
            headerStyle: {
              backgroundColor: GlobalColors.background,
            },
            title: 'Shelter list',
          }}
        />
      )}

      {profile === 'Volunteer' && (
        <Tab.Screen
          name={Routes.FavoriteScreen}
          component={FavoriteScreen}
          options={{
            tabBarIcon: FavoriteScreenIcon,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: size(15),
              textAlign: 'left',
              textTransform: 'uppercase',
              color: GlobalColors.textInBackground,
            },
            headerStyle: {
              backgroundColor: GlobalColors.background,
            },
            title: 'Favorite Animals',
          }}
        />
      )}

      <Tab.Screen
        name={Routes.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileScreenIcon,
          headerTitleStyle: {
            fontSize: size(15),
            textAlign: 'left',
            color: GlobalColors.textInBackground,
          },
          headerRight: SettingsHeaderButton,
          headerTitleAlign: 'left',
          headerStyle: {backgroundColor: GlobalColors.background},
        }}
      />
    </Tab.Navigator>
  );
};
