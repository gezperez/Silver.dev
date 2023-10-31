import { RouteProp } from '@react-navigation/core';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';

export type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Start'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Start'>;
};

export type InfoScreenProps = {
  route: RouteProp<RootStackParamList, 'Info'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Info'>;
};

export type SettingsScreenProps = {
  route: RouteProp<RootStackParamList, 'Settings'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};
