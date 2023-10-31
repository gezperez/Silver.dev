import { Menu } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { useAppContext } from '~/hooks';
import { Color } from '~/utils';

const Header = () => {
  return {
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
