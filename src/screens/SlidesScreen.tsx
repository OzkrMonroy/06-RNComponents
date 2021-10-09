import React, { useContext, useRef, useState } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any>{}

export const SlidesScreen = ({ navigation }: Props) => {
  const { theme: { colors } }  =useContext(ThemeContext)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const isVisible = useRef(false)
  const { transformPosition, opacity, startMoving, fadeIn } = useAnimation()

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 8,
          padding: 40,
          justifyContent: 'center'
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={{...styles.title, color: colors.text}}>{item.title}</Text>
        <Text style={{...styles.description, color: colors.text}}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Carousel
              data={items}
              renderItem={({ item }) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={(index) => {
                setCurrentCarouselIndex(index)
                if((index + 1) === items.length && !isVisible.current){
                  fadeIn(600)
                  startMoving(-100, 500)
                  setShowButton(true)
                  isVisible.current = true
                }
              }}
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20
            }}>
              <Pagination
                dotsLength={items.length}
                activeDotIndex={currentCarouselIndex}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: colors.primary
                }}
              />
              <Animated.View style={{
                opacity,
                transform: [{translateX: transformPosition}]
              }}>
                <TouchableOpacity style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.primary,
                  width: 120,
                  height: 50,
                  borderRadius: 10,
                }}
                activeOpacity={0.8}
                onPress={() => {
                  if(isVisible.current){
                    console.log('Navegando...');
                    navigation.navigate('HomeScreen')
                  }
                }}
                >
                  <Text style={{
                    fontSize: 20,
                    color: 'white'
                  }}>Entrar</Text>
                  <Icon 
                    name='navigate-next'
                    color='white'
                    size={25}
                  />
                </TouchableOpacity>

              </Animated.View>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  description: {
    fontSize: 16,
  }
})