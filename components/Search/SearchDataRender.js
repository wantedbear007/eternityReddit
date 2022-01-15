import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors/colors';

const SearchDataRender = ({item}) => (
  <View>
    <Text style={{color: colors.white}}>{item.data.title}</Text>
  </View>
);

export default memo(SearchDataRender);

const styles = StyleSheet.create({});
