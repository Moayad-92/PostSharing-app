import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {postcard_styles} from './styles';

const PostCard = (props) => {
  const {author, content} = props.post;

  const [linesCount, setLinesCount] = useState(3);
  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.header}>
        <Text style={postcard_styles.owner}>{author}</Text>
      </View>
      <TouchableOpacity
        style={postcard_styles.body}
        onPress={() => setLinesCount(linesCount == 3 ? 20 : 3)}>
        <Text style={postcard_styles.content} numberOfLines={linesCount}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
