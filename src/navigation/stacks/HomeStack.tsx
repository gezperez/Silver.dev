import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../interfaces/navigation';
import { HomeScreen, InfoScreen, SettingsScreen } from '~/screens';
import { Header } from '../components';
import { Color } from '~/utils';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Start"
    screenOptions={{
      headerShadowVisible: false,
      headerTintColor: Color.GRAY,
    }}
  >
    <Stack.Screen
      name="Start"
      component={HomeScreen}
      options={() => ({ ...Header() })}
    />
    <Stack.Screen name="Info" component={InfoScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
