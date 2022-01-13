import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Details from '../../screens/Details';

// Bottom Navigation
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
