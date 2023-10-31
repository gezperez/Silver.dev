import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '~/hooks';
import { navigate } from '~/navigation/RootNavigation';
import { Color } from '~/utils';

const { width } = Dimensions.get('window');

type DrawerButtonProps = {
  screen: string;
};

const DrawerButton = ({ screen }: DrawerButtonProps) => {
  const { toggleDrawer } = useAppContext();
  const handleOnPress = () => {
    toggleDrawer();
    navigate(screen);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        padding: 16,
        backgroundColor: 'red',
        width: width / 2 - 24,
        borderRadius: 12,
        marginVertical: 6,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: Color.WHITE,
          textAlign: 'left',
        }}
      >
        {screen}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
