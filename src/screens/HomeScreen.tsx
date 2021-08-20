import React from 'react'
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { RenderItemSeparator } from '../components/RenderItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title='Menu options'/>}
        ItemSeparatorComponent={() => <RenderItemSeparator/>}
      />
    </View>
  )
}
