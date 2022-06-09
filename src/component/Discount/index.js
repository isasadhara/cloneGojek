import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Discount = () => {
  return (
    <View style={styles.wrapperDiscount}>
      <Image
        source={require('../../assets/Images/discount.png')}
        style={styles.iconDiscount}
      />
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
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
