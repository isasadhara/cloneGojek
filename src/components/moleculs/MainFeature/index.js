import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MainFeature = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperIcon}>
        <Image source={props.img} style={styles.iconMenu} />
      </View>
      <Text style={styles.titleMenu}>{props.title}</Text>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  wrapper: {
    width: `${100 / 4}%`,
    alignItems: 'center',
    marginBottom: 17,
  },
  iconMenu: {width: 40, height: 40},
  titleMenu: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  wrapperIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
