import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { BottomTabStack } from './stacks';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  animationTypeForReplace: 'push',
};

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name="BottomBar" component={BottomTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
