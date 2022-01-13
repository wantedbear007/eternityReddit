import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import colors from '../assets/colors/colors';
import {ScreenWidth} from '../assets/Dimensions/ScreenDimensions';

const Popular = () => {
  return (
    <View style={styles.parentContainer}>
      <StatusBar backgroundColor={colors.black} />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Popular</Text>
      </View>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  headingContainer: {
    backgroundColor: colors.card,
    position: 'absolute',
    width: ScreenWidth / 1.1,
    top: 15,
    right: 0,
    paddingVertical: 8,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  headingText: {
    color: colors.title,
    fontSize: 30,
    fontFamily: 'JosefinSans-SemiBold',
    textAlign: 'right',
    marginRight: 10,
  },
});
