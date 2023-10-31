import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContactScreen } from '~/screens';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

const ContactStack = () => (
  <Stack.Navigator
    initialRouteName="Contact"
    screenOptions={{
      headerShadowVisible: false,
    }}
  >
    <Stack.Screen
      name="Contact"
      component={ContactScreen}
      options={(props) => ({ ...Header(props.route.name) })}
    />
  </Stack.Navigator>
);

export default ContactStack;
