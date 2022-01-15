import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Keyboard,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import SearchDataRender from '../components/Search/SearchDataRender';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);

  // SearchHandler
  const buttonHandler = () => {
    setDataLoading(true);
    axios
      .get(`https://www.reddit.com/search/.json?q=${searchText}`)
      .then(response => {
        setSearchData(response.data.data.children);
        setLoading(false);
        Keyboard.dismiss();
        setDataLoading(false);
      });
  };

  const renderItems = ({item}) => <SearchDataRender item={item} />;

  const SearchResults = () =>
    loading ? (
      <Text style={styles.redditSlogan}>
        Search the front page of the Internet 😉!
      </Text>
    ) : dataLoading ? (
      <ActivityIndicator size="large" color={colors.white} />
    ) : (
      <FlatList
        data={searchData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      />
    );

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.parentContainer}>
      <StatusBar backgroundColor={colors.card} />
      <Text style={styles.searchTitle}>Search</Text>
      <View style={styles.searchTextContainer}>
        <MaterialIcons name="search" color={colors.accent} size={25} />
        <TextInput
          placeholder="Write here..."
          placeholderTextColor={colors.grayText}
          style={styles.textInput}
          borderColor={colors.white}
          disableFullscreenUI={true}
          multiline={false}
          clearButtonMode="while-editing"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity onPress={buttonHandler} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <SearchResults />
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  searchTitle: {
    fontSize: 50,
    color: colors.white,
    marginBottom: 10,
    fontFamily: 'JosefinSans-SemiBold',
  },
  textInput: {
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    width: 240,
    color: colors.white,
    borderColor: colors.white,
    padding: 10,
    fontSize: 16,
    borderRadius: 14,
    paddingHorizontal: 20,
  },
  searchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
  },
  searchButtonText: {
    fontWeight: '600',
  },
  redditSlogan: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: colors.grayText,
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: 40,
  },
});
