import React from 'react';
import {View, Text, FlatList} from 'react-native';
import colors from '../../assets/colors/colors';
import DummyData from '../../DummyData';
import PopularRender from './PopularRender';

const ContentCard = () => {
  const renderItems = ({item}) => (
    <PopularRender item={item} />
  );
  return (
    <View>
      <FlatList
        data={DummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
      />
    </View>
  );
};

export default ContentCard;
