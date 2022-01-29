import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import colors from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScreenWidth} from '../../assets/Dimensions/ScreenDimensions';

const PopularRender = ({item, navigation}) => {
  const {
    permalink,
    title,
    author,
    ups,
    preview,
    num_comments,
    subreddit_name_prefixed,
    total_awards_received,
  } = item.data;
  // ImageViewHandler
  const ImageUrlHandler = () => {
    if (item.data.preview) {
      let imageUrl = preview.images[0].resolutions;
      if (imageUrl.length > 2) {
        imageUrl = preview.images[0].resolutions[2].url;
      } else imageUrl = preview.images[0].resolutions[0].url;

      imageUrl = imageUrl.replace(/amp;/g, '');
      return imageUrl;
    } else return null;
  };

  const imageLink = ImageUrlHandler();

  const ImageViewer = () =>
    imageLink ? <Image source={{uri: imageLink}} style={styles.image} /> : null;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.parentContainer}
      onPress={() =>
        navigation.navigate('Details', {
          data: item,
          imageUrl: imageLink,
        })
      }>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity>
          <MaterialIcons name="share" color={colors.white} size={25} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.authorText}>u/{author}</Text>
        {/* <Text></Text> DATE SECTION*/}
      </View>
      <ImageViewer />

      <View style={styles.informationContainer}>
        <View style={styles.likesContainer}>
          <Text style={styles.likes}>👍 {ups}</Text>
          <Text style={styles.awards}>🔥 {total_awards_received}</Text>
          <Text style={styles.comments}>💬 {num_comments}</Text>
        </View>
        <View style={styles.subRedditContainer}>
          <Text style={styles.subRedditName}>{subreddit_name_prefixed}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PopularRender);

// ! CHANGE WIDTH AND HEIGHT TO VALUES RECEIVED FROM API

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.card,
    marginVertical: 7,
    borderRadius: 18,
    //   paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: colors.white,
    // fontWeight: '500',
    width: ScreenWidth / 1.2,
  },
  image: {
    // height: 500,
    aspectRatio: 1,
    resizeMode: 'contain',
    width: '100%',
    marginVertical: 15,
    borderRadius: 3,
  },
  authorText: {
    color: colors.accent,
    fontSize: 13,
    marginHorizontal: 13,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likesContainer: {
    backgroundColor: colors.lightGray,
    marginVertical: 5,
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: ScreenWidth / 1.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  likes: {
    color: colors.accent,
  },
  awards: {
    color: colors.white,
  },
  comments: {
    color: colors.white,
  },
  subRedditContainer: {
    backgroundColor: colors.lightGray,
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 10,
  },
  subRedditName: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: 13,
  },
});
