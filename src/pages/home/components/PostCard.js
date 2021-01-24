import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {postcard_styles} from './styles';

const PostCard = (props) => {
  const {author, time, content} = props.post;

  const [linesCount, setLinesCount] = useState(3);
  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.header}>
        <Text style={postcard_styles.owner}>{author}</Text>
        <Text style={postcard_styles.time}>{time}</Text>
      </View>
      <TouchableOpacity
        style={postcard_styles.body}
        onPress={() => setLinesCount(linesCount == 3 ? 20 : 3)}>
        <Text style={postcard_styles.content} numberOfLines={linesCount}>
          {content}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'flex-end',
        }}>
        <Icon
          name="heart"
          color="yellow"
          size={30}
          style={{marginRight: 10}}
          onPress={() => console.log('faved')}
        />
      </View>
    </View>
  );
};

export default PostCard;
