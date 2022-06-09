import {StyleSheet, View, TextInput, Image} from 'react-native';
import React from 'react';
import BottomNavigation from './pages/BottomNavigation';
import SearchBar from './component/SearchBar';
import Discount from './component/Discount';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
        <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
          <SearchBar />
          <Discount />
        </View>
      </View>
      <BottomNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
});
