import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LinkText = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkText;
