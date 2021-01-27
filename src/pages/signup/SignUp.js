import React, {useState} from 'react';
import {SafeAreaView, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {CustomButton, Logo} from '../../components';
import {styles} from './styles';

export function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setpasswordRepeat] = useState('');

  function signUp() {
    email && password && passwordRepeat
      ? password === passwordRepeat
        ? auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              Alert.alert('* Bilgi *', 'Hesabınız oluşturuldu');
              navigation.navigate('SignIn');
              setEmail('');
              setPassword('');
              setpasswordRepeat('');
            })
            .catch(({code, message}) => Alert.alert(code, message))
        : Alert.alert('* Uyarı *', 'Şifreniz ve tekrarı aynı olmak zorundadır')
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
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={passwordRepeat}
        placeholder="Şifrenizi tekrar giriniz.."
        onChangeText={(value) => setpasswordRepeat(value)}
      />
      <CustomButton title="Kayıt Ol" styled={true} onClick={signUp} />
      <CustomButton
        title="Vazgeç"
        styled={false}
        onClick={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}
