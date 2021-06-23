import React, { useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { CustomSwitch } from "../components/CustomSwitch";
import { HeaderTitle } from "../components/HeaderTitle";

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  const { isActive, isHungry, isHappy } = state;

  const handleActiveChange = (value: boolean, field: string) => {
    setState({
      ...state, 
      [field]: value
    });
  }

  return (
    <View style={styles.container}>
      <HeaderTitle title='Switches'/>
      <View style={styles.switchContainer}>
        <Text style={styles.textData}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => handleActiveChange(value, 'isActive')}/>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.textData}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => handleActiveChange(value, 'isHungry')}/>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.textData}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => handleActiveChange(value, 'isHappy')}/>
      </View>
      <Text style={styles.textData}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
