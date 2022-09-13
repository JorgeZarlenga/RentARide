/* eslint-disable */

import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';

import { Button } from '../../components/Button';
import styles from './login-screen.styles';

const LoginScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
   
    if (!email) {
      showToast('Por favor, insira um email');
    } else if (!password) {
      showToast('Por favor, insira uma senha');
    } else {
      navigation.navigate('Tabs');
    }
  }

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Rent a Ride</Text>
      <Text style={styles.welcomeText}>Bem-vindo</Text>
      <TextInput
        style={styles.loginInput}
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
        placeholderTextColor='#000'
        value={email}
      />
      <TextInput
        style={styles.loginInput}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
        placeholderTextColor='#000'
        value={password}
      />
      <Button onClick={signIn} />
      <TouchableOpacity>
        <Text style={styles.loginOptionText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginOptionText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
