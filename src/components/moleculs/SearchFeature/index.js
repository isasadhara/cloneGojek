import {StyleSheet, TextInput, Image, View} from 'react-native';
import React from 'react';

const SearchFeature = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperSearch}>
        <TextInput
          placeholder="What do you want eat?"
          style={styles.inputSearch}
        />
        <Image
          source={require('../../../assets/Images/search.png')}
          style={styles.iconSearch}
        />
      </View>
      <View style={styles.wrapperDiscount}>
        <Image
          source={require('../../../assets/Images/discount.png')}
          style={styles.iconDiscount}
        />
      </View>
    </View>
  );
};

export default SearchFeature;

const styles = StyleSheet.create({
  wrapper: {marginHorizontal: 17, flexDirection: 'row', paddingTop: 17},
  wrapperSearch: {position: 'relative', flex: 1},
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
  iconDiscount: {
    width: 26,
    height: 26,
    position: 'absolute',
  },
  wrapperDiscount: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
