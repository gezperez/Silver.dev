import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { BottomTabStack } from './stacks';
import { navigationRef } from './RootNavigation';
import { Color } from '~/utils';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Color.WHITE,
  },
};

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  animationTypeForReplace: 'push',
};

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="BottomBar" component={BottomTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
