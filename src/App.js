import {StyleSheet, View} from 'react-native';
import React from 'react';
import BottomNavigation from './view/BottomNavigation';
import Home from './view/Pages/Home';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Home />
      <BottomNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
});
