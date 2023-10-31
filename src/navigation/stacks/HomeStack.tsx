import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../interfaces/navigation';
import { HomeScreen, InfoScreen, SettingsScreen } from '~/screens';
import { Header } from '../components';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen
      name="Start"
      component={HomeScreen}
      options={(props) => ({ ...Header(props.route.name) })}
    />
    <Stack.Screen
      name="Info"
      component={InfoScreen}
      options={(props) => ({ ...Header(props.route.name) })}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={(props) => ({ ...Header(props.route.name) })}
    />
  </Stack.Navigator>
);

export default HomeStack;
