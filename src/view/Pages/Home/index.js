import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import SearchBar from './Component/SearchBar';
import Discount from './Component/Discount';
import Gopay from './Component/Gopay';
import MainFeatures from './Component/MainFeature';
import News from './Component/News';
import Banner from './Component/Banner';
import InternalInformation from './Component/InternalInformation';
import NearbyRestaurants from './Component/NearbyRestaurants';

const Home = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white', paddingVertical: 17}}>
      <View style={styles.wrapperSearch}>
        <SearchBar />
        <Discount />
      </View>
      <Gopay />
      <MainFeatures />
      <View style={styles.line} />
      <News />
      <InternalInformation />
      <Banner />
      <NearbyRestaurants />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapperSearch: {marginHorizontal: 17, flexDirection: 'row'},
  line: {height: 15, backgroundColor: '#F2F2F4', marginTop: 17},
});
