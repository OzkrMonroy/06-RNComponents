import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const transformPosition = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }
  
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const startMoving = (initPosition: number, duration: number = 300) => {
    transformPosition.setValue(initPosition);

    Animated.timing(transformPosition, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }
  return {opacity, transformPosition, fadeIn, fadeOut, startMoving}
}
