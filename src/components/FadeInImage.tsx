import React, { useContext } from 'react'
import { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  uri: string,
  style?: StyleProp<ImageStyle>,
}

export const FadeInImage = ({ uri, style } : Props) => {
  const { theme: { colors } }  =useContext(ThemeContext)
  const { opacity, fadeIn } = useAnimation()
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false)
    fadeIn(500)
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {isLoading && <ActivityIndicator color={colors.primary} size={30} style={{ position: 'absolute' }}/>}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{
          // width: '100%',
          // height: 400,
          ...style as any,
          opacity
        }}
      />
    </View>
  )
}
