import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import {PostCard, ShareNewPost} from './components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const data1 = [
  // {
  //   id: 101,
  //   author: 'johnwick',
  //   time: '3 saat önce',
  //   content:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   id: 102,
  //   author: 'davidmick',
  //   time: '4 saat önce',
  //   content:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  // {
  //   id: 103,
  //   author: 'davidmick',
  //   time: '4 saat önce',
  //   content:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
];
export function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userEmail = auth().currentUser.email;

  const favoritePost = (post) => {
    var tmpUserKey = userEmail
      .split(/[ .:;@?!~,`"&|()<>{}\[\]\r\n/\\]+/)
      .join('');

    database()
      .ref(`/users/${tmpUserKey}/favorites/${post.key}`)
      .set(post)
      .then(() => console.log('Post is Faved.'));
  };

  const sharePost = (data) => {
    if (data) {
      const newPostReference = database().ref('/posts').push();

      newPostReference
        .set({
          author: userEmail,
          time: new Date().toString(),
          content: data,
        })
        .then(() => console.log('Post is shared.'));
    }
  };

  // reading data from firebase. psots are sorted by the sharing time
  useEffect(() => {
    database()
      .ref(`/posts`)
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

        // Sort by the latest
        modifiedArr = modifiedArr.sort(
          (a, b) => new Date(b.time) - new Date(a.time),
        );

        // Update data
        setData(modifiedArr);
        setLoading(false);
      });
  }, []);

  const renderPost = ({item}) => (
    <PostCard post={item} onFavoritingPost={favoritePost} />
  );

  // if (loading) {
  //   return (
  //     <>
  //       <Text style={{fontSize: 20, alignSelf: 'center'}}>Loading...</Text>
  //     </>
  //   );
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, alignSelf: 'center'}}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.author + item.time}
          renderItem={renderPost}
        />
      )}
      <ShareNewPost
        placeholder="What fires in your brain?"
        onSharePost={(value) => sharePost(value)}
      />
    </SafeAreaView>
  );
}
