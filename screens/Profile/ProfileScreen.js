/* eslint-disable */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './profile-screen.styles';

const ProfileScreen = ({navigation}) => {

    const settingsOptions = [
        {
            icon: require('./../../assets/icons/compass.png'),
            settingTitle: 'Notificações'
        },
        {
            icon: require('./../../assets/icons/compass.png'),
            settingTitle: 'Meus cartões'
        },
        {
            icon: require('./../../assets/icons/compass.png'),
            settingTitle: 'Meus dados'
        },
        {
            icon: require('./../../assets/icons/compass.png'),
            settingTitle: 'Termos e condições'
        },
        {
            icon: require('./../../assets/icons/compass.png'),
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
                <ScrollView>
            <View style={styles.settingsContainer}>
                {/* ScrollView para garantir a visualização de toda a lista mesmo em telas pequenas */}
                    {settingsOptions.map(( {icon, settingTitle}, index ) =>
                    <TouchableOpacity key={settingTitle}>
                        <View style={styles.settingContainer}>
                            <View style={[styles.settingImageContainer, styles.elementsCentered]}>
                            <Image
                                source={icon}
                                style={{width: 26, height: 26, fill: '#8F9BB3'}}
                                />
                            </View>
                            <View style={styles.settingTextContainer}>
                                <Text>{settingTitle}</Text>
                            </View>
                            <View style={[styles.settingArrowContainer, styles.elementsCentered]}>
                                <Text>></Text>
                            </View>
                        </View>
                        {/* View usada como divider */}
                        <View style={styles.settingDivider}/>
                    </TouchableOpacity>)}
            </View>
                </ScrollView>
        </View>
    );
};

export default ProfileScreen;