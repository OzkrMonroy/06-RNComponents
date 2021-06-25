import React from 'react';
import { View, Button, Alert } from 'react-native';

import prompt from 'react-native-prompt-android';

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
    // Alert.prompt(
    //   'Prompt example',
    //   'This is a prompt example.',
    //   (text: string) => console.log(`info: ${text}`),
    //   'plain-text',
    //   'Hello!',
    //   ''
    // );


    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    );
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />
      <Button title='Show alert' onPress={showAlert} />
      <Button title='Show prompt' onPress={showPrompt} />
    </View>
  )
}
