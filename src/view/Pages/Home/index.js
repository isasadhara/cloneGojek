import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchBar from './Component/SearchBar';
import Discount from './Component/Discount';
import Gopay from './Component/Gopay';
import MainFeatures from './Component/MainFeature';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
      <View style={styles.wrapperSearch}>
        <SearchBar />
        <Discount />
      </View>
      <Gopay />
      <MainFeatures />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapperSearch: {marginHorizontal: 17, flexDirection: 'row'},
});
