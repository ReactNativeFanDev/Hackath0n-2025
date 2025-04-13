import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackOptions} from './options';
import {AuthorizationParamList, RootStackParamList, Routes} from './types';
import {NavigationBottomTabs} from './components/navigationBottomTabs';
import {AuthorizationLoginScreen} from '../screens';
import {AuthorizationRegisterScreen} from '../screens/authorizationRegisterScreen';
import AuthorizationTypeScreen from '../screens/authorizationTypeScreen';
import NewAnnouncement from '../screens/newAnnouncement';
import {GlobalColors, size} from '../constants/Global';
import AnimalInfo from '../screens/animalInfo';
import OrganizationInfo from '../screens/organizationInfo';
import NewCabinet from '../screens/newCabinet';
import ShelterInfo from '../screens/shelterInfo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name={Routes.TabNavigator}
        component={NavigationBottomTabs}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen
        name={Routes.NewAnnouncement}
        component={NewAnnouncement}
        options={{
          animation: 'ios_from_right',
          title: 'Add a new pet',
          headerBackTitle: 'Back',
          headerTitleStyle: {
            fontSize: size(18),
            fontWeight: '600',
            color: GlobalColors.textInBackground,
          },
          headerShown: true,
          headerStyle: {backgroundColor: GlobalColors.background},
          headerShadowVisible: false,
          headerTintColor: GlobalColors.activeColor,
        }}
      />
      <Stack.Screen
        name={Routes.NewCabinet}
        component={NewCabinet}
        options={{
          animation: 'ios_from_right',
          title: 'Add a new shelter',
          headerBackTitle: 'Back',
          headerTitleStyle: {
            fontSize: size(18),
            fontWeight: '600',
            color: GlobalColors.textInBackground,
          },
          headerShown: true,
          headerStyle: {backgroundColor: GlobalColors.background},
          headerShadowVisible: false,
          headerTintColor: GlobalColors.activeColor,
        }}
      />
      <Stack.Screen
        name={Routes.AnimalInfo}
        component={AnimalInfo}
        options={{
          animation: 'ios_from_right',
          title: 'PET INFO',
          headerBackTitle: 'Back',
          headerTitleStyle: {
            fontSize: size(18),
            fontWeight: '600',
            color: GlobalColors.textInBackground,
          },
          headerShown: true,
          headerStyle: {backgroundColor: GlobalColors.background},
          headerShadowVisible: false,
          headerTintColor: GlobalColors.activeColor,
        }}
      />
      <Stack.Screen
        name={Routes.ShelterInfo}
        component={ShelterInfo}
        options={{
          animation: 'ios_from_right',
          title: 'SHELTER INFO',
          headerBackTitle: 'Back',
          headerTitleStyle: {
            fontSize: size(18),
            fontWeight: '600',
            color: GlobalColors.textInBackground,
          },
          headerShown: true,
          headerStyle: {backgroundColor: GlobalColors.background},
          headerShadowVisible: false,
          headerTintColor: GlobalColors.activeColor,
        }}
      />
      <Stack.Screen
        name={Routes.OrganizationInfo}
        component={OrganizationInfo}
        options={{
          animation: 'fade_from_bottom',
          title: 'Organization Info',
          headerBackTitle: 'Back',
          headerTitleStyle: {
            fontSize: size(18),
            fontWeight: '600',
            color: GlobalColors.textInBackground,
          },
          headerShown: true,
          headerStyle: {backgroundColor: GlobalColors.background},
          headerShadowVisible: false,
          headerTintColor: GlobalColors.activeColor,
        }}
      />
    </Stack.Navigator>
  );
};

const Auth = createNativeStackNavigator<AuthorizationParamList>();

export const AuthorizationNavigation = (): React.JSX.Element => {
  return (
    <Auth.Navigator screenOptions={stackOptions}>
      <Auth.Screen
        name={Routes.AuthorizationScreen}
        component={AuthorizationLoginScreen}
      />
      <Auth.Screen
        name={Routes.AuthorizationRegisterScreen}
        component={AuthorizationRegisterScreen}
      />
      <Auth.Screen
        name={Routes.AuthorizationTypeScreen}
        component={AuthorizationTypeScreen}
      />
    </Auth.Navigator>
  );
};
