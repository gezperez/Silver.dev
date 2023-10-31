import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ContactScreen } from '~/screens';
import HomeStack from './HomeStack';
import { Header } from '../components';

const Tab = createBottomTabNavigator();

const navigationOptions: BottomTabNavigationOptions = {};

const BottomTabStack = () => {
  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        options={(props) => ({ ...Header(props.route.name) })}
        name="Contacts"
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
