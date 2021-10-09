import { createContext } from 'react';
import { InterfaceThemeState } from './themeReducer';

interface ThemeContextProps {
  theme: InterfaceThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);