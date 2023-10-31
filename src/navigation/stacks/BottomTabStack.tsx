import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import { Book, HomeIcon } from 'lucide-react-native';
import { Color } from '~/utils';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const Icon = route.name === 'Home' ? HomeIcon : Book;
          return <Icon color={color} size={size} />;
        },
        tabBarInactiveTintColor: Color.PRIMARY,
        tabBarActiveTintColor: Color.SECONDARY,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contacts" component={ContactStack} />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
