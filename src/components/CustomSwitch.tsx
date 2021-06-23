import React, { useState } from "react";
import { Switch, Platform } from "react-native";

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const thumbColor = Platform.OS === 'android' ? '#5856D6' : '';
  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange(!isEnabled)
  };
  
  return (
    <Switch
      trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
      thumbColor={isEnabled ? thumbColor : "#f4f3f4"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
