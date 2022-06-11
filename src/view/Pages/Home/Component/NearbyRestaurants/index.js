import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const NearbyRestaurants = () => {
  return (
    <View style={{marginBottom: 50}}>
      <Text style={styles.iconBanner}>G O J E K</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 17,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
          Nearby Restaurants
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
          See All
        </Text>
      </View>

      <ScrollView
        horizontal
        style={{
          flexDirection: 'row',
          marginTop: 17,
          paddingLeft: 17,
        }}>
        <View style={{marginRight: 17, alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://indonesia.tripcanvas.co/wp-content/uploads/2017/01/jakarta-dining-with-a-view-feature.jpg',
              }}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
              color: '#1C1C1C',
            }}>
            Restaurant Tebet
          </Text>
        </View>

        <View style={{marginRight: 17, alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://atalian.id/wp-content/uploads/sites/17/2020/01/Pest-Control-for-Restaurant.jpg',
              }}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
              color: '#1C1C1C',
            }}>
            Warkop Kemang
          </Text>
        </View>

        <View style={{marginRight: 17, alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://www.wowkeren.com/display/images/photo/2019/03/27/00250293.jpg',
              }}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
              color: '#1C1C1C',
            }}>
            RM. Sederhana Minang
          </Text>
        </View>

        <View style={{marginRight: 17, alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/penjual-melayani-pembeli-di-warteg-city-bahari-rawa-belong_210124203122-300.jpg',
              }}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
              color: '#1C1C1C',
            }}>
            Warteg Bahari
          </Text>
        </View>

        <View style={{marginRight: 17, alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: 'https://img.idxchannel.com/media/500/images/idx/2022/03/04/Estimasi_Biaya_Usaha_Angkringan__MNC_.jpg',
              }}
              style={{width: 150, height: 150, borderRadius: 10}}
            />
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
              color: '#1C1C1C',
            }}>
            Angkringan Mas Budi
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NearbyRestaurants;

const styles = StyleSheet.create({
  iconBanner: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 17,
    marginLeft: 17,
  },
});
