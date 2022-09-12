/* eslint-disable */

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './button.styles';

export const Button = ({onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </View>
    </TouchableOpacity>
  );
};
