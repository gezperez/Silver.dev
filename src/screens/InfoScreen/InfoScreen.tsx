import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';
import { InfoScreenProps } from '~/navigation/interfaces/home';
import { Color } from '~/utils';

const InfoScreen = ({ navigation }: InfoScreenProps) => {
  const handleOnPress = () => navigation.navigate('Settings');

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Navigate Settings Screen"
        onPress={handleOnPress}
        color={Color.SECONDARY}
      />
    </View>
  );
};

export default InfoScreen;
