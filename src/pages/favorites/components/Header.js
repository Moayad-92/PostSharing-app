import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {header_styles} from './styles';

export default function Header({onClick}) {
  return (
    <View style={header_styles.container}>
      <Text style={header_styles.title}>Saved</Text>
      <Icon name="logout" size={35} color="yellow" onPress={onClick} />
    </View>
  );
}
