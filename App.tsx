import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { ThemeState } from './src/context/theme/ThemeState';

// const customTheme: Theme = {
//   dark: true,
//   colors: { 
//     ...DarkTheme.colors,
//     // primary: 'string',
//     // background: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   }
// }

const App = () => {
  return (
    <AppState>
      <StackNavigation />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeState>
      {children}
    </ThemeState>
  )
}

export default App;