import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../assets/colors/colors';
import DummyData from '../../DummyData';
import PopularRender from './PopularRender';
import axios from 'axios';

const ContentCard = () => {
  // Temporary Data source

  const [receivedData, setReceivedData] = React.useState([]);
  const [currentPageNumber, setCurrentPageNumber] = React.useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/.json?limit=${currentPageNumber}`)
      .then(response => {
        setReceivedData(response.data.data.children);
        setLoading(false);
      });
  }, [currentPageNumber]);

  const renderItems = ({item}) =>
    loading ? (
      <ActivityIndicator size="large" style={{marginTop: 200}} color={colors.white} />
    ) : (
      <PopularRender item={item} />
    );

  const infiniteScrollHandler = () => {
    setCurrentPageNumber(currentPageNumber + 20);
  };

  // Loader function
  const renderLoader = () => (
    <View>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );

  // Temporary Data Source

  //   const renderItems = ({item}) => <PopularRender item={item} />;
  return (
    <View>
      <FlatList
        data={receivedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        // Not final
        onEndReached={infiniteScrollHandler}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderLoader}
        // Not final
      />
    </View>
  );
};

export default ContentCard;
