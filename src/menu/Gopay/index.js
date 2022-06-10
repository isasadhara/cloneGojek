import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import PayIcon from '../../assets/Icons/pay.svg';
import NearbyIcon from '../../assets/Icons/nearby.svg';
import TopUpIcon from '../../assets/Icons/topup.svg';
import MoreIcon from '../../assets/Icons/more.svg';

const Gopay = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperSaldo}>
        <Image source={require('../../assets/Images/gopay.png')} />
        <Text style={styles.jumlahSaldo}>Rp50.000</Text>
      </View>
      <View style={styles.wrapperMenu}>
        <View style={styles.menu}>
          <PayIcon />
          <Text style={styles.titleMenu}>Pay</Text>
        </View>
        <View style={styles.menu}>
          <NearbyIcon />
          <Text style={styles.titleMenu}>Nearby</Text>
        </View>
        <View style={styles.menu}>
          <TopUpIcon />
          <Text style={styles.titleMenu}>Top Up</Text>
        </View>
        <View style={styles.menu}>
          <MoreIcon />
          <Text style={styles.titleMenu}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Gopay;

const styles = StyleSheet.create({
  wrapper: {marginHorizontal: 17, marginTop: 17},
  wrapperSaldo: {
    backgroundColor: '#1E55BA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  jumlahSaldo: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  wrapperMenu: {
    flexDirection: 'row',
    backgroundColor: '#1B51B1',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 12,
  },
  menu: {flex: 1, alignItems: 'center'},
  titleMenu: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 5,
  },
});
