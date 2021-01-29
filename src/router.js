import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {SignIn, SignUp, Home, Favorites} from './pages';
import Colors from './constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const hasSession = auth().currentUser;
auth().onAuthStateChanged((user) => console.log(user));

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => setIcon(focused, color, route),
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        initialRouteName: 'Home',
        labelStyle: {fontWeight: 'bold', fontSize: 12, marginBottom: 3},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasSession ? 'TabNavigator' : 'SignIn'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function setIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Favorites':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    default:
      break;
  }
  return <Icon name={iconName} color={color} size={30} />;
}
