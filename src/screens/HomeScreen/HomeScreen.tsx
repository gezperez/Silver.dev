import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';
import { HomeScreenProps } from '~/navigation/interfaces/home';
import { Color } from '~/utils';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const handleOnPress = () => navigation.navigate('Info');

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Navigate Info Screen"
        onPress={handleOnPress}
        color={Color.SECONDARY}
      />
    </View>
  );
};

export default HomeScreen;
