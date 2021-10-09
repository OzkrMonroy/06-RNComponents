import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ThemeContext } from '../context/theme/ThemeContext';

import { MenuItem } from '../interfaces/MenuItem';
// import { useTheme } from '@react-navigation/native';

interface Props {
  item: MenuItem
}

export const FlatListMenuItem = ({item: { name, icon, screen }} : Props) => {
  const navigation = useNavigation();
  const { theme: { colors } }  =useContext(ThemeContext)
  // const { colors } = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(screen)}>
      <View style={ styles.container }>
        <Icon name={icon} size={23} color={colors.primary}/>
        <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>
        <View style={{ flex: 1 }}/>
        <Icon name='arrow-right' size={23} color={colors.primary}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10
  }
});