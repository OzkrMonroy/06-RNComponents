import React, { useState } from "react";
import { View, Switch, StyleSheet, Platform } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const thumbColor = Platform.OS === 'android' ? '#5856D6' : '';

  return (
    <View style={styles.container}>
      <HeaderTitle title='Switches'/>
      <Switch
        trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
        thumbColor={isEnabled ? thumbColor : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  }
});
