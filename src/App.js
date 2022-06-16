import {StyleSheet, View, ScrollView, Image, Text} from 'react-native';
import React from 'react';
import SearchFeature from './components/moleculs/SearchFeature';
import GoNews from './components/moleculs/GoNews';
import GoInfo from './components/moleculs/GoInfo';
import GoBanner from './components/moleculs/GoBanner';
import GopayFeature from './components/moleculs/GopayFeature';
import ScrollableProducts from './containers/organisms/ScrollableProducts';
import MainFeature from './components/moleculs/MainFeature';
import HomeIcon from './assets/Icons/home.svg';
import OrdersIcon from './assets/Icons/orders.svg';
import HelpIcon from './assets/Icons/help.svg';
import InboxIcon from './assets/Icons/inbox.svg';
import AccountIcon from './assets/Icons/account.svg';
import NavBarIcon from './components/moleculs/NavBarIcon';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* search bar */}
        <SearchFeature />

        {/* gopay */}
        <View style={styles.wrapperGopay}>
          <View style={styles.wrapperSaldo}>
            <Image source={require('./assets/Images/gopay.png')} />
            <Text style={styles.jumlahSaldo}>Rp50.000</Text>
          </View>
          <View style={styles.wrapperMenu}>
            <GopayFeature
              title="Pay"
              img={require('./assets/Images/pay.png')}
            />
            <GopayFeature
              title="Nearby"
              img={require('./assets/Images/nearby.png')}
            />
            <GopayFeature
              title="Top Up"
              img={require('./assets/Images/topup.png')}
            />
            <GopayFeature
              title="More"
              img={require('./assets/Images/more.png')}
            />
          </View>
        </View>

        {/* main feature */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 17}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
            }}>
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/Images/discount.png')}
            />
          </View>
        </View>

        <View style={styles.line} />

        <GoNews />
        <GoInfo />
        <GoBanner />

        <ScrollableProducts />
      </ScrollView>
      <View style={styles.wrapperBottomNav}>
        <NavBarIcon
          title="Home"
          icon={require('./assets/Icons/home.svg')}
          active
        />
        <NavBarIcon
          title="Orders"
          icon={require('./assets/Icons/orders.svg')}
        />
        <NavBarIcon title="Help" icon={require('./assets/Icons/help.svg')} />
        <NavBarIcon title="Inbox" icon={require('./assets/Icons/inbox.svg')} />
        <NavBarIcon
          title="Account"
          icon={require('./assets/Icons/account.svg')}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  line: {height: 15, backgroundColor: '#F2F2F4', marginTop: 17},
  wrapperGopay: {marginHorizontal: 17, marginTop: 17},
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
  wrapperBottomNav: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  // menuBottomNav: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // textIcon: {
  //   fontSize: 10,
  //   color: '#545454',
  //   marginTop: 4,
  // },
});
