import React, { useEffect, useReducer } from 'react'
import { Appearance, AppState, useColorScheme } from 'react-native';
import { ThemeContext } from "./ThemeContext"
import { lightTheme, themeReducer, darkTheme } from './themeReducer';

export const ThemeState = ({ children }: any) => {
  const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'light') ? lightTheme : darkTheme)
  
  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if(status === 'active'){
        (Appearance.getColorScheme() === 'light')
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, [])

  // iOS solution
  // const colorScheme = useColorScheme()
  // const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'light') ? lightTheme : darkTheme)

  // useEffect(() => {
  //   (colorScheme === 'light')
  //     ? setLightTheme()
  //     : setDarkTheme()
  // }, [colorScheme])

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' })
  }

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' })
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}