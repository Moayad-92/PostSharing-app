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
              Alert.alert('* Info *', 'Account successfully created');
              navigation.navigate('SignIn');
              setEmail('');
              setPassword('');
              setpasswordRepeat('');
            })
            .catch(({code, message}) => Alert.alert(code, message))
        : Alert.alert(
            '* Warning *',
            'Your password and repeat password must match',
          )
      : Alert.alert('* Warning *', 'Please fill in all fields');
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
        placeholder="E-mail.."
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        placeholder="Password.."
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={passwordRepeat}
        placeholder="Repeat password.."
        onChangeText={(value) => setpasswordRepeat(value)}
      />
      <CustomButton title="Register" styled={true} onClick={signUp} />
      <CustomButton
        title="Cancel"
        styled={false}
        onClick={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}
