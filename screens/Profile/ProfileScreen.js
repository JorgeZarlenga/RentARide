/* eslint-disable */

import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './profile-screen.styles';

const ProfileScreen = ({navigation}) => {

    const settingsOptions = [
        {
            settingTitle: 'Notificações'
        },
        {
            settingTitle: 'Meus cartões'
        },
        {
            settingTitle: 'Meus dados'
        },
        {
            settingTitle: 'Termos e condições'
        },
        {
            settingTitle: 'Fale conosco'
        }
    ];

    return(
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <View style={styles.profileTextsContainer}>
                    <Text>Olá, João!</Text>
                    <Text>joao.silva@rent-a-ride.com</Text>
                    <Text>Não é voce? Sair</Text>
                </View>
                <View style={styles.profileImageContainer}>
                    <Text>Imagem de perfil</Text>
                </View>
            </View>
            <View style={styles.settingsContainer}>
                {/* ScrollView para garantir a visualização de toda a lista mesmo em telas pequenas */}
                <ScrollView>
                    {settingsOptions.map(( {settingTitle}, index ) =>
                    <TouchableOpacity key={settingTitle}>
                        <View>
                            <Text>{settingTitle}</Text>
                        </View>
                        {/* View usada como divider */}
                        <View style={styles.settingDivider}/>
                    </TouchableOpacity>)}
                </ScrollView>
            </View>
        </View>
    );
};

export default ProfileScreen;