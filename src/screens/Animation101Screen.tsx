import React, { useContext } from 'react';
import { View, Animated, StyleSheet, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation101Screen = () => {
  const { theme: { colors } }  =useContext(ThemeContext)
  const { opacity, transformPosition, fadeIn, fadeOut, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        backgroundColor: colors.primary, 
        opacity, 
        marginBottom: 20,
        transform: [{ translateY: transformPosition }],
      }}/>
      <Button title='Fade In' onPress={() => {
        fadeIn();
        startMoving(-100);
      }}/>
      <Button title='Fade Out' onPress={fadeOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    height: 150,
    width: 150,
  },
});