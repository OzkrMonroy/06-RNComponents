import React from 'react'
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

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
        ListHeaderComponent={() => <HeaderTitle title='Menu options'/>}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  )
}
