import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/MenuItem';

interface Props {
  item: MenuItem
}

export const FlatListMenuItem = ({item: { name, icon, screen }} : Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={ styles.container }>
        <Icon name={icon} size={23} color='blue'/>
        <Text style={ styles.itemText }>{name}</Text>
        <View style={{ flex: 1 }}/>
        <Icon name='keyboard_arrow_right' size={23} color='blue'/>
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