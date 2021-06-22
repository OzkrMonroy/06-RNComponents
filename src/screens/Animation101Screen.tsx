import React from 'react';
import { View, Animated, StyleSheet, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { opacity, transformPosition, fadeIn, fadeOut, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox, 
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
    backgroundColor: '#5856D6',
    height: 150,
    width: 150,
  },
});