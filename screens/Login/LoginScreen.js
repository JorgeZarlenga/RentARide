/* eslint-disable */

import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Button } from "../../components/Button";
import styles from './login-screen.styles';

const LoginScreen = ({ navigation, route }) => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    function signIn() {
        navigation.navigate('Tabs');
    }

    // USAR SAFEAREAVIEW E KEYBOARDAVOIDINGVIEW?
    // CRIAR VALIDAÇÃO PARA EMAIL

    return(
        <View style={styles.container}>
            <Text style={styles.logoText}>Rent-a-Ride</Text>
            <Text style={styles.welcomeText}>Bem-vindo</Text>
            <TextInput
                style={styles.loginInput}
                keyboardType='password'
                onChangeText={onChangeEmail}
                placeholder='E-mail'
                value={email}
            />
            <TextInput
                style={styles.loginInput}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                placeholder='Senha'
                value={password}
            />
            <Button onClick={signIn}/>
            <Text style={styles.loginOptionText}>Esqueceu sua senha?</Text>
            <Text style={styles.loginOptionText}>Cadastre-se</Text>
        </View>
    );
    
};

export default LoginScreen;