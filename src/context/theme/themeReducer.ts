import { Theme } from "@react-navigation/native";

type ThemeAction = 
  | { type: 'set_light_theme' }
  | { type: 'set_dark_theme' }

export interface InterfaceThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: InterfaceThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, .7)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'gray',
    notification: 'teal',
  }
}

export const darkTheme: InterfaceThemeState = {
  currentTheme: 'light',
  dark: true,
  dividerColor: 'rgba(255, 255, 255, .9)',
  colors: {
    primary: '#5856D6',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'gray',
    notification: 'teal',
  }
}

export const themeReducer = (state: InterfaceThemeState, action: ThemeAction) : InterfaceThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme}
    case 'set_dark_theme':
      return {...darkTheme}
    default:
      return state
  }
}