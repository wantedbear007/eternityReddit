import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import colors from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScreenWidth} from '../../assets/Dimensions/ScreenDimensions';

const PopularRender = ({item}) => {
  // ImageViewHandler
  const ImageViewer = () => {
    if (item.data.preview) {
      let imageUrl = item.data.preview.images[0].resolutions;
      if (imageUrl.length > 2) {
        imageUrl = item.data.preview.images[0].resolutions[2].url;
      } else imageUrl = item.data.preview.images[0].resolutions[1].url;

      imageUrl = imageUrl.replace(/amp;/g, '');
      return <Image source={{uri: imageUrl}} style={styles.image} />;
    } else return null;
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{item.data.title}</Text>
        <TouchableOpacity>
          <MaterialIcons name="share" color={colors.white} size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.authorText}>u/{item.data.author}</Text>
        {/* <Text></Text> DATE SECTION*/}
      </View>
      <ImageViewer />
      <View style={styles.informationContainer}>
        <View style={styles.likesContainer}>
          <Text style={styles.likes}>👍 {item.data.ups}</Text>
          <Text style={styles.awards}>
            🔥 {item.data.total_awards_received}
          </Text>
          <Text style={styles.comments}>💬 {item.data.num_comments}</Text>
        </View>
        <View style={styles.subRedditContainer}>
          <Text style={styles.subRedditName}>
            {item.data.subreddit_name_prefixed}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(PopularRender);

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.card,
    marginVertical: 10,
    borderRadius: 18,
    //   paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '500',
    width: ScreenWidth / 1.2,
  },
  image: {
      height: 500,
      resizeMode: 'contain',
    width: '100%',
    marginVertical: 15,
    borderRadius: 5,
  },
  authorText: {
    // fontWeight: '500',
    color: colors.accent,
    fontSize: 15,
    marginHorizontal: 18
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
      color: colors.accent

  },
  awards: {
      color: colors.white
  },
  comments: {
      color: colors.white
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
