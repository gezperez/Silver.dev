import { Dimensions, StyleSheet } from 'react-native';
import { Color } from '~/utils';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
  },
  container: {
    position: 'absolute',
    left: 0,
    paddingVertical: height / 7,
    width: width / 2,
    height: height / 1.5,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: Color.WHITE,
    marginBottom: height / 16,
  },
  navigatorContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default styles;
