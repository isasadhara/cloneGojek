import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const News = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperBanner}>
        <Image
          source={{
            uri: 'https://kabarindoraya.com/wp-content/uploads/2020/10/IMG-20201018-WA0004.jpg',
          }}
          style={styles.banner}
        />
        <View style={styles.opacityBanner} />
        <Text style={styles.iconBanner}>G o j e k</Text>
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.titleNews}>GO-NEWS</Text>
        <Text style={styles.descNews}>
          Tim Jaguar Gerebek Rumah untuk ritual Santet di Depok.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.nameButton}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 17,
  },
  wrapperBanner: {marginTop: 17, position: 'relative'},
  banner: {height: 180, width: '100%', borderRadius: 10},
  iconBanner: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    paddingTop: 17,
    paddingLeft: 17,
    fontWeight: 'bold',
  },
  opacityBanner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.2,
    borderRadius: 10,
  },
  wrapperText: {
    marginTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  titleNews: {fontSize: 16, fontWeight: 'bold'},
  descNews: {fontSize: 14, marginTop: 5, color: '#7A7A7A'},
  button: {
    backgroundColor: '#61A756',
    borderRadius: 7,
    padding: 12,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  nameButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
});
