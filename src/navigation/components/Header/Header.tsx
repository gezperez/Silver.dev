import { Menu } from 'lucide-react-native';
import { Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '~/hooks';
import { Color } from '~/utils';
import styles from './styles';

const Header = (title: string) => {
  return {
    headerTitle: () => <Text style={styles.title}>{title}</Text>,
    headerLeft: () => {
      const { toggleDrawer } = useAppContext();

      return (
        <TouchableOpacity onPress={toggleDrawer}>
          <Menu color={Color.GRAY} size={24} />
        </TouchableOpacity>
      );
    },
  };
};

export default Header;
