import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperBanner}>
        <Image
          source={{
            uri: 'https://media.suara.com/pictures/653x366/2021/08/02/81387-ilustrasi-makanan-cepat-saji-freepik.jpg',
          }}
          style={styles.banner}
        />
        <View style={styles.opacityBanner} />
        <Text style={styles.iconBanner}>G o f o o d</Text>
        <View style={styles.wrapperContentBanner}>
          <View style={styles.wrapperTextBanner}>
            <Text style={styles.titleBanner}>Free GO-FOOD vouchers</Text>
            <Text style={styles.descBanner}>Quick, before they run out!</Text>
          </View>
          <View style={styles.wrapperButtonBanner}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.nameButton}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    paddingBottom: 17,
    marginHorizontal: 17,
  },
  wrapperContentBanner: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100 %',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingBottom: 17,
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
  wrapperTextBanner: {flex: 1},
  titleBanner: {color: 'white', fontWeight: 'bold', fontSize: 16},
  descBanner: {color: 'white', fontSize: 12, marginTop: 8},
  wrapperButtonBanner: {paddingLeft: 12},
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
