import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {
  const {pan, drawableView} = useAnimation();
  const panResponse = drawableView();

  return (
    <View style={styles.container}>
      <Animated.View {...panResponse.panHandlers} style={[pan.getLayout(), styles.cyanBox]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cyanBox: {
    backgroundColor: '#75CEDB',
    width: 150,
    height: 150,
  }
});