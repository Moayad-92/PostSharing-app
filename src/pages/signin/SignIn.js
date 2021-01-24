import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {CustomButton, Logo} from '../../components';
import {styles} from './styles';

export function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    navigation.navigate('SignUp');
  }

  function signIn() {
    navigation.navigate('TabNavigator');
  }

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
      <CustomButton title="Giriş Yap" styled={true} onClick={signIn} />
      <CustomButton title="Kayıt Ol" styled={false} onClick={signUp} />
    </SafeAreaView>
  );
}
