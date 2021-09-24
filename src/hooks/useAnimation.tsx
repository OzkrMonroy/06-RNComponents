import { useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const transformPosition = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const fadeIn = (duration: number = 200) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
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

  const drawableView = () => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y,
        }
      ], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false
        }).start();
      }
    });

    return panResponder
  }

  return {
    opacity,
    transformPosition,
    pan,
    fadeIn,
    fadeOut,
    startMoving,
    drawableView
  }
}
