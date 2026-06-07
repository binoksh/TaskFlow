import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function CustomButton({ title, onPress, style, textStyle, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
