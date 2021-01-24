import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SignIn, SignUp, Home, Favorites} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => setIcon(focused, color, route),
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: '#45cb7d',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
  let label;
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      label = 'Gönderiler';
      break;
    case 'Favorites':
      iconName = focused ? 'heart' : 'heart-outline';
      label = 'Kayıtlar';
      break;

    default:
      break;
  }
  return (
    <View style={{alignItems: 'center', marginBottom: 3}}>
      <Icon name={iconName} color={color} size={30} />
      <Text style={{color: color, fontWeight: 'bold'}}>{label}</Text>
    </View>
  );
}
