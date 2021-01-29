import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, View, Alert, Image} from 'react-native';
import PostCard from './components/PostCard';
import Header from './components/Header';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export function Favorites({navigation}) {
  const userEmail = auth().currentUser.email;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function signOut() {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn');
        Alert.alert('* Info *', 'Signed Out');
        console.log(auth().currentUser);
      });
  }

  var tmpUserKey = userEmail
    .split(/[ .:;@?!~,`"&|()<>{}\[\]\r\n/\\]+/)
    .join('');

  const renderPost = ({item}) => <PostCard post={item} />;

  // reading data from firebase.
  useEffect(() => {
    database()
      .ref(`/users/${tmpUserKey}/favorites`)
      .on('value', (snapshot) => {
        const server_data = snapshot.val();

        if (!server_data) {
          setData([]);
        }

        // Modifying coming data, to keep track of the key:value pairs
        var modifiedArr = [];
        snapshot.forEach(function (childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          modifiedArr.push(item);
        });

        setData(modifiedArr);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header onClick={signOut} />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, alignSelf: 'center'}}>Loading...</Text>
        </View>
      ) : data.length == 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/inbox.png')}
            resizeMode="contain"
            style={{width: 150, margin: 0}}
          />
          <Text style={{fontSize: 20}}>No saved posts</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPost}
        />
      )}
    </SafeAreaView>
  );
}
