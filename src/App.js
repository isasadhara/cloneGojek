import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import BottomNavigation from './pages/BottomNavigation';
import SearchBar from './component/SearchBar';
import Discount from './component/Discount';
import Gopay from './menu/Gopay';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
        <View style={styles.wrapperSearch}>
          <SearchBar />
          <Discount />
        </View>
        <Gopay />
      </View>
      <BottomNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  wrapperSearch: {marginHorizontal: 17, flexDirection: 'row'},
});
