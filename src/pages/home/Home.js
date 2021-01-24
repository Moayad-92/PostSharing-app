import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import PostCard from './components/PostCard';

const data = [
  {
    id: 101,
    author: 'johnwick',
    time: '3 saat önce',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 102,
    author: 'davidmick',
    time: '4 saat önce',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
export function Home() {
  const renderPost = ({item}) => <PostCard post={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
      />
    </SafeAreaView>
  );
}
