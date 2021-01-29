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
      <CustomButton title="Sign IN" styled={true} onClick={signIn} />
      <CustomButton title="Sign Up" styled={false} onClick={signUp} />
    </SafeAreaView>
  );
}
