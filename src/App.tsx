import React from 'react';

import { DrawerContainer } from './components';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <DrawerContainer />
    </AppProvider>
  );
};

export default App;
