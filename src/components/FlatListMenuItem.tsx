import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/MenuItem';
import { useTheme } from '@react-navigation/native';

interface Props {
  item: MenuItem
}

export const FlatListMenuItem = ({item: { name, icon, screen }} : Props) => {
  const navigation = useNavigation();
  const { colors } = useTheme()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(screen)}>
      <View style={ styles.container }>
        <Icon name={icon} size={23} color='blue'/>
        <Text style={ {...styles.itemText, color: colors.text} }>{name}</Text>
        <View style={{ flex: 1 }}/>
        <Icon name='arrow-right' size={23} color='blue'/>
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