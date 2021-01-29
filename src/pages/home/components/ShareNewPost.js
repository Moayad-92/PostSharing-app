import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sharepost_styles} from './styles';

function ShareNewPost(props) {
  const [newPostTxt, setNewPostTxt] = useState('');
  const {placeholder, onSharePost} = props;

  return (
    <View style={sharepost_styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(value) => setNewPostTxt(value)}
        placeholderTextColor="#ffffffb3"
        style={sharepost_styles.textInput}
        value={newPostTxt}
      />

      <Icon
        name="send"
        color="yellow"
        size={30}
        style={sharepost_styles.sendIcon}
        onPress={() => {
          onSharePost(newPostTxt);
          setNewPostTxt('');
        }}
      />
    </View>
  );
}

export {ShareNewPost};
