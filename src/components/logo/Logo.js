import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export function Logo() {
  return (
    <View style={styles.logo_container}>
      <Icon name="message-text" size={100} color="white" />
      <Text style={styles.logo_text}>Kod_One</Text>
    </View>
  );
}
