import React from 'react'
import { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo!')
    }, 2000);
  }

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor='white'
          colors={['green','red', 'orange']}
          style={{ backgroundColor: '#5856D6' }}
          tintColor='white'
          title='Refreshing...'
          titleColor='white'
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to refresh'/>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  )
}
