import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

export const RenderItemSeparator = () => {
  const { theme: { dividerColor } }  =useContext(ThemeContext)

  return (
    <View style={{
      borderBottomWidth: 1,
      // opacity: 0.4,
      marginVertical: 8,
      borderBottomColor: dividerColor
    }}/>
  )
}