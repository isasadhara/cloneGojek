import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NavBarIcon = props => {
  return (
    <View style={styles.menuBottomNav}>
      <Image
        source={props.icon}
        style={{tintColor: props.active ? '#43AB4A' : '#C5C5C5'}}
      />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;

const styles = StyleSheet.create({
  menuBottomNav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // textIcon: {
  //   fontSize: 10,
  //   color: '#545454',
  //   color: props.active ? '#43AB4A' : '#545454',
  //   marginTop: 4,
  // },
});
