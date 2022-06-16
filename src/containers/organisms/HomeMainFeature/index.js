import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MainFeature from '../../../components/moleculs/MainFeature';

class HomeMainFeature extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperIcon}>
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
          <MainFeature
            title="GO-RIDE"
            img={require('../../../assets/Images/discount.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 17},
  wrapperIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
});
