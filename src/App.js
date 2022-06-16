import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import SearchFeature from './components/moleculs/SearchFeature';
import GoNews from './components/moleculs/GoNews';
import GoInfo from './components/moleculs/GoInfo';
import GoBanner from './components/moleculs/GoBanner';
import ScrollableProducts from './containers/organisms/ScrollableProducts';
import NavBar from './containers/organisms/NavBar';
import HomeMainFeature from './containers/organisms/HomeMainFeature';
import HomeGoPay from './containers/organisms/HomeGoPay';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scroll}>
        <SearchFeature />
        <HomeGoPay />
        <HomeMainFeature />
        <View style={styles.line} />
        <GoNews />
        <GoInfo />
        <GoBanner />
        <ScrollableProducts />
      </ScrollView>
      <NavBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  scroll: {flex: 1, backgroundColor: 'white'},
  line: {height: 15, backgroundColor: '#F2F2F4', marginTop: 17},
});
