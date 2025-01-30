import React from 'react';
import { TextInput, StyleProp, TextStyle } from 'react-native';

interface InputFieldProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, secureTextEntry, style, onChangeText }) => {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      placeholderTextColor="gray"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText} 
    />
  );
};

export default InputField;
