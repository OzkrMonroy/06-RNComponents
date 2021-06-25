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

  const showPrompt = () => {
    Alert.prompt(
      'Prompt example',
      'This is a prompt example.',
      (text: string) => console.log(`info: ${text}`),
      'plain-text',
      'Hello!',
      ''
    );
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts'/>
      <Button title='Show alert' onPress={showAlert}/>
      <Button title='Show prompt' onPress={showPrompt}/>
    </View>
  )
}
