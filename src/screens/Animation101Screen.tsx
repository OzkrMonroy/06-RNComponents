import React from 'react'
import { useRef } from 'react';
import { Button, Easing } from 'react-native';
import { View, Animated, StyleSheet } from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()

    Animated.timing(top, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }
  
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox, 
        opacity, 
        marginBottom: 20,
        transform: [{ translateY: top }],
      }}/>
      <Button title='Fade In' onPress={fadeIn}/>
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