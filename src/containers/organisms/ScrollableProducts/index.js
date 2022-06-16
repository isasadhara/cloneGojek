import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import ScrollableItem from '../../../components/moleculs/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.iconBanner}>G O J E K</Text>

        <View style={styles.header}>
          <Text style={styles.titleRestaurant}>Nearby Restaurants</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView horizontal style={styles.scrollview}>
          <ScrollableItem
            title="Restaurant Tebet"
            img={{
              uri: 'https://indonesia.tripcanvas.co/wp-content/uploads/2017/01/jakarta-dining-with-a-view-feature.jpg',
            }}
          />
          <ScrollableItem
            title="Warkop Kemang"
            img={{
              uri: 'https://atalian.id/wp-content/uploads/sites/17/2020/01/Pest-Control-for-Restaurant.jpg',
            }}
          />
          <ScrollableItem
            title="RM. Sederhana Minang"
            img={{
              uri: 'https://www.wowkeren.com/display/images/photo/2019/03/27/00250293.jpg',
            }}
          />
          <ScrollableItem
            title="Warteg Bahari"
            img={{
              uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/penjual-melayani-pembeli-di-warteg-city-bahari-rawa-belong_210124203122-300.jpg',
            }}
          />
          <ScrollableItem
            title="Angkringan Mas Budi"
            img={{
              uri: 'https://img.idxchannel.com/media/500/images/idx/2022/03/04/Estimasi_Biaya_Usaha_Angkringan__MNC_.jpg',
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
export default ScrollableProducts;
const styles = StyleSheet.create({
  wrapper: {marginBottom: 50},
  titleRestaurant: {fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'},
  seeAll: {fontSize: 17, fontWeight: 'bold', color: '#61A756'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 17,
  },
  scrollview: {flexDirection: 'row', marginTop: 17, paddingLeft: 17},
  iconBanner: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 17,
    marginLeft: 17,
  },
});
