import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const getIsNavigationReady = (name: string) => {
  return navigationRef.isReady();
};

export const isFocused = (name: string) => {
  if (navigationRef?.current && navigationRef?.current?.getCurrentRoute) {
    const screenName = navigationRef.current.getCurrentRoute()?.name || 'Start';

    const isFocused = screenName === name;

    return isFocused;
  }
};
