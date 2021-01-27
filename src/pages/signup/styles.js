import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.lightblue,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
});
