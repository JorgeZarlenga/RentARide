import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './button.styles';

export const Button = ({onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text>Oi</Text>
      </View>
    </TouchableOpacity>
  );
};
