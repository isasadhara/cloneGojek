import {StyleSheet, TextInput, Image, View} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="What do you want eat?"
        style={styles.inputSearch}
      />
      <Image
        source={require('../../../../../assets/Images/search.png')}
        style={styles.iconSearch}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {position: 'relative', flex: 1},
  inputSearch: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    paddingLeft: 45,
    paddingRight: 20,
    height: 40,
    fontSize: 13,
    marginRight: 18,
  },
  iconSearch: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 9,
    left: 12,
  },
});
