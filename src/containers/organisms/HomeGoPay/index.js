import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import GopayFeature from '../../../components/moleculs/GopayFeature';

class HomeGoPay extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperSaldo}>
          <Image source={require('../../../assets/Images/gopay.png')} />
          <Text style={styles.jumlahSaldo}>Rp50.000</Text>
        </View>
        <View style={styles.wrapperMenu}>
          <GopayFeature
            title="Pay"
            img={require('../../../assets/Images/pay.png')}
          />
          <GopayFeature
            title="Nearby"
            img={require('../../../assets/Images/nearby.png')}
          />
          <GopayFeature
            title="Top Up"
            img={require('../../../assets/Images/topup.png')}
          />
          <GopayFeature
            title="More"
            img={require('../../../assets/Images/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeGoPay;

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
});
