import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export function CustomButton({title, styled, onClick}) {
  return (
    <TouchableOpacity
      style={styled && styles.button_container}
      onPress={onClick}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
}
