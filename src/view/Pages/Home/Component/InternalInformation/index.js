import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const InternalInformation = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.iconBanner}>G O J E K</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 17,
          color: '#1C1C1C',
          marginTop: 10,
        }}>
        Complete Your Profile
      </Text>
      <View style={{flexDirection: 'row', marginTop: 17}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
          }}
          style={styles.icon}
        />
        <View style={styles.wrapperContent}>
          <Text style={styles.title}>Connect With Facebook</Text>
          <Text style={styles.desc}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.nameButton}>CONNECT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InternalInformation;

const styles = StyleSheet.create({
  wrapper: {padding: 17, borderBottomColor: '#E8E9ED', borderBottomWidth: 1},
  iconBanner: {fontSize: 16, fontWeight: 'bold', color: '#000000'},
  icon: {width: 80, height: 80},
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
  title: {fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'},
  desc: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '70%',
  },
  wrapperContent: {marginLeft: 17, justifyContent: 'center'},
});
