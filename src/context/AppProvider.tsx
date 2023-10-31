import { ReactNode, createContext, useState } from 'react';

type AppContextType = {
  toggleDrawer: () => void;
  showDrawer: boolean;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType>({
  showDrawer: false,
  toggleDrawer: () => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <AppContext.Provider
      value={{
        toggleDrawer,
        showDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
