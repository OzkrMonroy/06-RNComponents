import React, { useContext } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Text, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/theme/ThemeContext';

interface FormState {
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
}

export const TextInputScreen = () => {
  const { theme: { colors, dividerColor } }  =useContext(ThemeContext)
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
              style={{...stylesScreen.textInput, borderColor: dividerColor, color: colors.text}}
              placeholder='Enter your name'
              autoCapitalize='words'
              onChangeText={(text: string) => onChange(text, 'name')}
              keyboardType='default'
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{...stylesScreen.textInput, borderColor: dividerColor, color: colors.text}}
              placeholder='Enter your email'
              autoCapitalize='none'
              onChangeText={(text: string) => onChange(text, 'email')}
              keyboardType='email-address'
              placeholderTextColor={dividerColor}
            />
            <View style={stylesScreen.switchContainer}>
              <Text style={{...stylesScreen.textData, color: colors.text}}>Subscribe</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')}/>
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)}/>
            <HeaderTitle title={JSON.stringify(form, null, 3)}/>
            <Text style={{...stylesScreen.textMessage, color: colors.text}}>{JSON.stringify(form, null, 3)}</Text>
            <TextInput
              style={{...stylesScreen.textInput, borderColor: dividerColor, color: colors.text}}
              placeholder='Enter your phone number'
              onChangeText={(text: string) => onChange(text, 'phone')}
              keyboardType='phone-pad'
              placeholderTextColor={dividerColor}
            />
            <View style={{ height: 100 }}/>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
  textInput: {
    borderWidth: 1,
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
