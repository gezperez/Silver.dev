import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type HomeScreen = {};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
