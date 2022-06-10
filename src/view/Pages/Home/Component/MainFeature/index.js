import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MainFeatures = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTop}>
        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-CAR</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-RIDE</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-BLUEBIRD</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-SEND</Text>
        </View>
      </View>
      <View style={styles.wrapperDown}>
        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-DEALS</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-PULSA</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>GO-FOOD</Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.wrapperIcon}>
            <Image
              source={require('../../../../../assets/Images/discount.png')}
              style={styles.iconMenu}
            />
          </View>
          <Text style={styles.titleMenu}>MORE</Text>
        </View>
      </View>
    </View>
  );
};

export default MainFeatures;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 17,
  },
  wrapperTop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 17,
  },
  wrapperDown: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
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
  menu: {
    width: `${100 / 4}%`,
    alignItems: 'center',
  },
  iconMenu: {width: 40, height: 40},
  titleMenu: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});
