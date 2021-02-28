import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import KeyScreenModal from './screens/KeyScreenModal';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Community!</Text>
    </View>
  );
}

const KeyScreenComponent = () => {
  return null
}

const INITIAL_ROUTE_NAME = 'Community';
const tabBarOptions = {
  activeTintColor: "#000",
  inactiveTintColor: "#aaa",
  allowFontScaling: true,
  labelStyle: {
    fontSize: 10,
    paddingBottom: 8,
    fontWeight: 'bold',
  },
  tabStyle: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    height: 60,
    paddingTop: 4,
  },
  style: {
    position: 'relative',
    height: 80,
    overflow: 'visible',
  }
}
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Community" component={CommunityScreen} options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account-supervisor-outline" size={32} color={color} />)}}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home-outline" size={32} color={color} />)}}/>
        <Tab.Screen name="Pay" component={KeyScreenComponent} options={{tabBarLabel: () => null, tabBarIcon: () => (<KeyScreenModal />)}} listeners={{tabPress: (e) => {e.preventDefault()},}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
