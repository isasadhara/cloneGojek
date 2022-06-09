import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeIcon from '../../assets/Icons/home.svg';
import OrdersIcon from '../../assets/Icons/orders.svg';
import HelpIcon from '../../assets/Icons/help.svg';
import InboxIcon from '../../assets/Icons/inbox.svg';
import AccountIcon from '../../assets/Icons/account.svg';

const BottomNavigation = () => {
  return (
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
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
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
