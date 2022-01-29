import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import DetailsHead from '../components/DetailsSection/DetailsHead';

const Details = ({route, navigation}) => {
  return <DetailsHead route={route} navigation={navigation} />;
};

export default Details;

const styles = StyleSheet.create({});
