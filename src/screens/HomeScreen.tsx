import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/MenuItem';
import { styles } from '../theme/appTheme';

const menuItems: MenuItem[] = [
  {name: 'Animation101', icon: 'animation', screen: 'Animation101Screen'},
  {name: 'Animation102', icon: 'auto-awesome-motion', screen: 'Animation102Screen'},
]

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles.title}>Animations</Text>
      </View>
    )
  }

  const renderItemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
      }}/>
    )
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  )
}
