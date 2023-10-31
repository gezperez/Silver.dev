import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '~/hooks';
import * as RootNavigation from '~/navigation/RootNavigation';
import styles from './styles';

type DrawerButtonProps = {
  screen: string;
};

const DrawerButton = ({ screen }: DrawerButtonProps) => {
  const { toggleDrawer } = useAppContext();
  const handleOnPress = () => {
    toggleDrawer();
    RootNavigation.navigate(screen, {});
  };

  const isFocused = RootNavigation.isFocused(screen);

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[styles.container, !isFocused && styles.inactiveContainer]}
    >
      <Text style={[isFocused ? styles.name : styles.inactiveName]}>
        {screen}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
