import React from 'react';
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
  
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the alert message!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true, }
    );
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts'/>
      <Button title='Show alert' onPress={showAlert}/>
    </View>
  )
}
