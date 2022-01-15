import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import {ScreenWidth} from '../assets/Dimensions/ScreenDimensions';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const textInputHandler = () => {
    console.log(searchText);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.parentContainer}>
      <Text style={styles.searchTitle}>Search</Text>
      <View style={styles.searchTextContainer}>
        <MaterialIcons name="search" color={colors.accent} size={25} />
        <TextInput
          placeholder="Write here..."
          placeholderTextColor={colors.grayText}
          style={styles.textInput}
          borderColor={colors.white}
          value={searchText}
          numberOfLines={1}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={textInputHandler}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 40,
  },
  searchButtonText: {
    fontWeight: '600',
  },
});
