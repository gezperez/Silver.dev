import { Dimensions, StyleSheet } from 'react-native';
import { Color } from '~/utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(219, 44, 96, 0.3)',
    width: width / 2 - 24,
    borderRadius: 12,
    marginVertical: 6,
  },
  inactiveContainer: {
    backgroundColor: Color.TRANSPARENT,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Color.SECONDARY,
    textAlign: 'left',
  },
  inactiveName: {
    color: Color.WHITE,
  },
});

export default styles;
