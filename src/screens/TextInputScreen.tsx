import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Text, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

interface FormState {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const TextInputScreen = () => {
  const { form, onChange, isSubscribed } = useForm<FormState>({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title='TextInput'/>
            <TextInput
              style={stylesScreen.textInput}
              placeholder='Enter your name'
              autoCapitalize='words'
              onChangeText={(text: string) => onChange(text, 'name')}
              keyboardType='default'
            />
            <TextInput
              style={stylesScreen.textInput}
              placeholder='Enter your email'
              autoCapitalize='none'
              onChangeText={(text: string) => onChange(text, 'email')}
              keyboardType='email-address'
            />
            <View style={stylesScreen.switchContainer}>
              <Text style={stylesScreen.textData}>Subscribe</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')}/>
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)}/>
            <HeaderTitle title={JSON.stringify(form, null, 3)}/>
            <Text style={stylesScreen.textMessage}>{JSON.stringify(form, null, 3)}</Text>
            <TextInput
              style={stylesScreen.textInput}
              placeholder='Enter your phone number'
              onChangeText={(text: string) => onChange(text, 'phone')}
              keyboardType='phone-pad'
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .4)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    color: 'black'
  },
  textMessage: {
    fontSize: 18
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textData: {
    fontSize: 25,
  }
});
