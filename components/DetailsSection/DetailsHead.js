import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';

const DetailsHead = ({route, navigation}) => {
  const {data, imageUrl} = route.params;
  const {
    title,
    author,
    ups,
    permalink,
    num_comments,
    preview,
    subreddit_name_prefixed,
    total_awards_received,
    thumbnail,
  } = data.data;
  const ImageViewer = () =>
    imageUrl ? <Image source={{uri: imageUrl}} style={styles.image} /> : null;
  return (
    <View style={styles.parentContainer}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomNavigation')}>
          <Ionicons name="arrow-back" size={30} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.subRedditName}>{subreddit_name_prefixed}</Text>
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.author}>Posted by: u/{author}</Text>
      <ImageViewer />
      <View style={styles.likeContainer}>
        <Text style={styles.like}>👍{ups}</Text>
        <Text style={styles.like}>🎗️{total_awards_received}</Text>
        <Text style={styles.like}>💬{num_comments}</Text>
      </View>
    </View>
  );
};

export default DetailsHead;

const styles = StyleSheet.create({});
