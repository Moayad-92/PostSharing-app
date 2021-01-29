import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import PostCard from './components/PostCard';
import database from '@react-native-firebase/database';

export function Favorites() {
  const userEmail = 'ahmedhibrahim01@gmail.com';
  const [data, setData] = useState(null);

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
          return;
        }

        // Modifying coming data, to keep track of the key:value pairs
        var modifiedArr = [];
        snapshot.forEach(function (childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          modifiedArr.push(item);
        });

        setData(modifiedArr);
      });
  }, []);

  if (!data) {
    return (
      <>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Loading...</Text>
      </>
    );
  }

  console.log('server_data' + data);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPost}
      />
    </SafeAreaView>
  );
}
