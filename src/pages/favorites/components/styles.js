import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../constants/Colors';

const screen = Dimensions.get('window');

const postcard_styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 25,
    paddingBottom: 10,
    overflow: 'hidden',
    backgroundColor: Colors.tomato,

    shadowColor: 'rgba(67, 55, 55, 0.1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 7,
  },
  header: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: Colors.lighttomato,
  },
  body: {
    padding: 15,
  },
  owner: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 18,
    backgroundColor: Colors.darktomato,
    paddingHorizontal: 17,
    paddingVertical: 8,
    borderRadius: 20,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 10,
    fontSize: 16,
  },
  content: {
    padding: 8,
    borderRadius: 15,
    textAlign: 'justify',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

const header_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.lightblue,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {postcard_styles, header_styles};
