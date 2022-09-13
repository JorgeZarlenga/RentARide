/* eslint-disable */

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export const Header = ({onClick, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Image
          source={require('../../assets/icons/arrow.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: -20,
    color: '#000'
  },
  icon: {
    width: 24,
    height: 24,
  },
});
