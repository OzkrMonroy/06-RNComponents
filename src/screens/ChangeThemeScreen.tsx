import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext';
import { Text, TouchableOpacity, View } from 'react-native'

import { HeaderTitle } from '../components/HeaderTitle'

export const ChangeThemeScreen = () => {
  const { theme: { dark, colors }, setDarkTheme, setLightTheme } = useContext(ThemeContext)

  const handleTheme = () => {
    if(dark){
      setLightTheme()
      return
    }
    setDarkTheme()
  }

  return (
    <View>
      <HeaderTitle title="Theme"/>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center'
          }}
          onPress={handleTheme}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
          }}>Light / Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
