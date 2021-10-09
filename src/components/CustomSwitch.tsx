import React, { useContext, useState } from "react";
import { Switch, Platform } from "react-native";
import { ThemeContext } from "../context/theme/ThemeContext";

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const { theme: { colors } }  =useContext(ThemeContext)
  const [isEnabled, setIsEnabled] = useState(isOn);
  const thumbColor = Platform.OS === 'android' ? colors.primary : '';
  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange(!isEnabled)
  };
  
  return (
    <Switch
      trackColor={{ false: "#D9D9DB", true: colors.primary }}
      thumbColor={isEnabled ? thumbColor : "#f4f3f4"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
