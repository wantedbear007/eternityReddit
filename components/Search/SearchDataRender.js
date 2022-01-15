import React, {memo} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';
import {ScreenWidth} from '../../assets/Dimensions/ScreenDimensions';

const SearchDataRender = ({item}) => {
  // ImageHandler
  const ImageHandler = () =>
    item.data.preview ? (
      <Image source={{uri: item.data.thumbnail}} style={styles.image} />
    ) : (
      <Image
        source={{
          uri: 'https://thumbs.dreamstime.com/b/reddit-media-social-icon-vector-image-can-also-be-used-social-media-logos-suitable-mobile-apps-web-apps-print-media-78727922.jpg',
        }}
        style={styles.image}
      />
    );

  return (
    <TouchableOpacity style={styles.parentContainer} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <ImageHandler />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.data.title} </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.likesContainer}>
            <Text style={styles.likes}>👍{item.data.ups}</Text>
            <Text style={styles.comment}>💬{item.data.num_comments}</Text>
          </View>
          <Text style={styles.subRedditName}>
            {item.data.subreddit_name_prefixed}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SearchDataRender);

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#3D3B3C',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    paddingVertical: 10,
    elevation: 20,
    borderRadius: 14
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 80,
  },
  imageContainer: {
    width: 90,
  },
  detailsContainer: {
    width: ScreenWidth / 1.4,
    //   flexDirection: 'row'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent,
    paddingVertical: 5,
    width: 150,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  likes: {
    color: colors.grayText,
    marginRight: 10,
  },
  comment: {
    color: colors.grayText,
  },
  subRedditName: {
    color: colors.title,
    textAlign: 'right',
    fontWeight: '600',
  },
});
