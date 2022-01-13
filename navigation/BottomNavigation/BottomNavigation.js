import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Screens
import Home from '../../screens/Home';
import Trending from '../../screens/Trending';
import Search from '../../screens/Search';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Trending" shifting={true}>
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
