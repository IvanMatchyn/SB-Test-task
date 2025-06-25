import React, { createContext, FC, ReactNode, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { AppTheme } from '../models/interfaces/theme.interfaces.ts';

import { darkTheme } from './dark.ts';
import { lightTheme } from './light.ts';

const ThemeContext = createContext<AppTheme>(lightTheme);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();

  const theme = useMemo(() => {
    return colorScheme === 'dark' ? darkTheme : lightTheme;
  }, [colorScheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
