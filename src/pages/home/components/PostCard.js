import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {postcard_styles} from './styles';

const PostCard = (props) => {
  const {author, time, content, key} = props.post;

  const authorLabel = author.split('@')[0];
  const timeLabel = getTimeLabel(time);

  const [linesCount, setLinesCount] = useState(3);
  const [isFaved, setIsFaved] = useState(false);

  return (
    <View style={postcard_styles.container}>
      <View style={postcard_styles.header}>
        <Text style={postcard_styles.owner}>{authorLabel}</Text>
        <Text style={postcard_styles.time}>{timeLabel}</Text>
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
          name={isFaved ? 'heart' : 'heart-outline'}
          color="yellow"
          size={30}
          style={{marginRight: 10}}
          onPress={() => {
            if (!isFaved) {
              props.onFavoritingPost(props.post);
              setIsFaved(true);
            }
          }}
        />
      </View>
    </View>
  );
};

export {PostCard};

function getTimeLabel(postDate) {
  var timeLabel = '';

  postData = new Date(postDate.toString());
  const todayDate = new Date();

  var momentRange = require('moment-range');
  momentRange.extendMoment(moment);
  const range1 = moment.range(postData, todayDate); // start ,end

  const years_diff = range1.diff('years');
  const months_diff = range1.diff('months');
  const days_diff = range1.diff('days');
  const hours_diff = range1.diff('hours');
  const minutes_diff = range1.diff('minutes');
  const seconds_diff = range1.diff('seconds');

  if (years_diff == 0) {
    // less than a year
    if (months_diff == 0) {
      // less than a month
      if (days_diff == 0) {
        // less than a day
        if (minutes_diff < 60) {
          // less than an hour
          if (seconds_diff < 60) {
            // less than a minute
            timeLabel = 'Before ' + seconds_diff.toString() + ' second/s';
          } else {
            // more than an minute
            timeLabel = 'Before ' + minutes_diff.toString() + ' minute/s';
          }
        } else {
          // more than an hour
          timeLabel = 'Before ' + hours_diff.toString() + ' hour/s';
        }
      } else {
        timeLabel = 'Before ' + days_diff.toString() + ' day/s';
      }
    } else {
      timeLabel = 'Before ' + months_diff.toString() + ' month/s';
    }
  } else {
    timeLabel = 'Before ' + years_diff.toString() + ' year/s';
  }

  return timeLabel;
}
