import { RouteProp } from '@react-navigation/core';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';

export type SplashScreenProps = {
  route: RouteProp<RootStackParamList, 'Splash'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

export type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export type CameraScreenProps = {
  route: RouteProp<RootStackParamList, 'Camera'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Camera'>;
};

export type PhotoDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'PhotoDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'PhotoDetail'>;
};
