import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {CustomButton, Logo} from '../../components';
import {styles} from './styles';

export function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        style={styles.input}
        placeholder="E-posta adresinizi giriniz.."
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Şifrenizi giriniz.."
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Şifrenizi tekrar giriniz.."
        onChangeText={(value) => setPassword(value)}
      />
      <CustomButton
        title="Kayıt Ol"
        styled={true}
        onClick={() => navigation.navigate('SignIn')}
      />
      <CustomButton
        title="Vazgeç"
        styled={false}
        onClick={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}
