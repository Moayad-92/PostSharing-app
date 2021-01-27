import React, {useState} from 'react';
import {SafeAreaView, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {CustomButton, Logo} from '../../components';
import {styles} from './styles';

export function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    navigation.navigate('SignUp');
  }

  function signIn() {
    email && password
      ? auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate('TabNavigator');
            setEmail('');
            setPassword('');
          })
          .catch(({code, message}) => Alert.alert(code, message))
      : Alert.alert('* Uyarı *', 'Lütfen tüm Alanları doldurunuz');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        style={styles.input}
        value={email}
        placeholder="E-posta adresinizi giriniz.."
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        placeholder="Şifrenizi giriniz.."
        onChangeText={(value) => setPassword(value)}
      />
      <CustomButton title="Giriş Yap" styled={true} onClick={signIn} />
      <CustomButton title="Kayıt Ol" styled={false} onClick={signUp} />
    </SafeAreaView>
  );
}
