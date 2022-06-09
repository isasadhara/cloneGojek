import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HomeIcon from './src/assets/icons/home.svg';
import OrdersIcon from './src/assets/icons/orders.svg';
import HelpIcon from './src/assets/icons/help.svg';
import InboxIcon from './src/assets/icons/inbox.svg';
import AccountIcon from './src/assets/icons/account.svg';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={styles.wrapperBottomNav}>
        <View style={styles.menuBottomNav}>
          <HomeIcon />
          <Text style={styles.textIcon}>Home</Text>
        </View>
        <View style={styles.menuBottomNav}>
          <OrdersIcon />
          <Text style={styles.textIcon}>Orders</Text>
        </View>
        <View style={styles.menuBottomNav}>
          <HelpIcon />
          <Text style={styles.textIcon}>Help</Text>
        </View>
        <View style={styles.menuBottomNav}>
          <InboxIcon />
          <Text style={styles.textIcon}>Inbox</Text>
        </View>
        <View style={styles.menuBottomNav}>
          <AccountIcon />
          <Text style={styles.textIcon}>Account</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  wrapperBottomNav: {
    height: 54,
    flexDirection: 'row',
  },
  menuBottomNav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIcon: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
});
