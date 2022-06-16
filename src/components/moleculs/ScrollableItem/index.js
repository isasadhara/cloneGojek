import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ScrollableItem = props => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image source={props.img} style={styles.image} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({
  wrapper: {marginRight: 17, alignItems: 'center'},
  image: {width: 150, height: 150, borderRadius: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#1C1C1C',
  },
});
