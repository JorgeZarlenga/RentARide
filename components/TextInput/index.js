/* eslint-disable */

import React from 'react';
import {TouchableOpacity, View, TextInput} from 'react-native';
import styles from './textInput.styles';

export const Input = () => {

  const [text, onChangeText] = React.useState("Useless Text");
  const [email, onChangeEmail] = React.useState("Useless Text");

  return (
    <View>
      <TextInput 
        onChangeText={onChangeText}
        value={text}
        style={styles.textInput}
      />
    </View>
  );
};
