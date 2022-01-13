import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import Home from '../../screens/Home';
import Popular from '../../screens/Popular';
import Search from '../../screens/Search';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator
    initialRouteName="Popular"
    barStyle={styles.navigationBar}
    shifting={true}>
    <Tab.Screen
      name="Popular"
      component={Popular}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="explore" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: colors.accent,
    paddingVertical: 4,
  },
});

export default BottomNavigation;
