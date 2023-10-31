import React, { useEffect } from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useAppContext } from '~/hooks';
import Navigator from '~/navigation/Navigator';
import { DrawerButton } from './components';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const DrawerContainer = () => {
  const { showDrawer, toggleDrawer } = useAppContext();

  const animatedValue = useSharedValue(0);
  const translateXValue = useSharedValue(0);
  const translateYValue = useSharedValue(0);
  const translateYNavigatorValue = useSharedValue(0);
  const borderRadiusValue = useSharedValue(0);

  const borderRadiusStyle = useAnimatedStyle(() => {
    return {
      borderTopStartRadius: borderRadiusValue.value,
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYValue.value }],
    };
  });

  const transformStyle = useAnimatedStyle(() => {
    const degree = interpolate(animatedValue.value, [0, 1], [0, 2 * Math.PI]);
    return {
      transform: [
        { translateX: width - width / 2 },
        { translateY: 0 - height / 2 },
        { rotateZ: `-${degree}deg` },
        { translateX: translateXValue.value },
        { translateY: translateYNavigatorValue.value },
        { translateX: -(width - width / 2) },
        { translateY: -(0 - height / 2) },
      ],
    };
  });

  const handleResetValues = () => {
    animatedValue.value = withTiming(0);
    translateXValue.value = withTiming(0);
    translateYValue.value = withTiming(0);
    translateYNavigatorValue.value = withTiming(0);
    borderRadiusValue.value = withTiming(0);
  };

  const handleShowDrawer = () => {
    animatedValue.value = withTiming(1);
    translateXValue.value = withTiming(width / 2);
    translateYValue.value = withTiming(60);
    translateYNavigatorValue.value = withTiming(10);
    borderRadiusValue.value = withTiming(30);
  };

  const handleHideDrawer = () => {
    if (showDrawer) {
      toggleDrawer();
    }
  };

  useEffect(() => {
    if (showDrawer) {
      handleShowDrawer();
    } else {
      handleResetValues();
    }
  }, [showDrawer]);

  return (
    <Animated.View
      style={[styles.mainContainer, containerStyle, borderRadiusStyle]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Beka</Text>
        <DrawerButton screen="Start" />
      </View>
      <TouchableWithoutFeedback onPress={handleHideDrawer}>
        <Animated.View
          style={[styles.navigatorContainer, transformStyle, borderRadiusStyle]}
        >
          <Navigator />
        </Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default DrawerContainer;
