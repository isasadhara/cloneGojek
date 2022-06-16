import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const GopayFeature = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={props.img} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default GopayFeature;

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center'},
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 5,
  },
  image: {width: 35, height: 35},
});
