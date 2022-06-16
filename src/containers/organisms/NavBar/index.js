import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import NavBarIcon from '../../../components/moleculs/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NavBarIcon
          title="Home"
          icon={require('../../../assets/Icons/home.svg')}
          active
        />
        <NavBarIcon
          title="Orders"
          icon={require('../../../assets/Icons/orders.svg')}
        />
        <NavBarIcon
          title="Help"
          icon={require('../../../assets/Icons/help.svg')}
        />
        <NavBarIcon
          title="Inbox"
          icon={require('../../../assets/Icons/inbox.svg')}
        />
        <NavBarIcon
          title="Account"
          icon={require('../../../assets/Icons/account.svg')}
        />
      </View>
    );
  }
}

export default NavBar;

const styles = StyleSheet.create({
  wrapper: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
