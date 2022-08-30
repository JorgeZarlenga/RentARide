/* eslint-disable */

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const SettingOption = ({icon, settingTitle, index}) => {
  return (
    <TouchableOpacity key={index}>
      <View style={styles.settingContainer}>
        <View
          style={[
            styles.settingImageContainer,
            styles.elementsCentered,
          ]}>
          <Image
            source={icon}
            style={{width: 26, height: 26, fill: '#8F9BB3'}}
          />
        </View>
        <View style={styles.settingTextContainer}>
          <Text>{settingTitle}</Text>
        </View>
        <View
          style={[
            styles.settingArrowContainer,
            styles.elementsCentered,
          ]}>
          <Image
            source={require('./../../assets/icons/setting-arrow.png')}
            style={{width: 20, height: 18}}
          />
        </View>
      </View>
      {/* View usada como divider */}
      <View style={styles.settingDivider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  settingImageContainer: {
    width: '15%',
  },
  settingTextContainer: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: '70%',
  },
  settingArrowContainer: {
    width: '15%',
    flex: 1,
  },
  elementsCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingDivider: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
