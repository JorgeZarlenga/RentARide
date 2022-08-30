/* eslint-disable */

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ProfileHeader } from '../../components/ProfileHeader';
import { SettingOption } from '../../components/SettingOption';
import styles from './profile-screen.styles';

const ProfileScreen = ({navigation}) => {
  const settingsOptions = [
    {
      icon: require('./../../assets/icons/bell.png'),
      settingTitle: 'Notificações',
    },
    {
      icon: require('./../../assets/icons/credit-card.png'),
      settingTitle: 'Meus cartões',
    },
    {
      icon: require('./../../assets/icons/user.png'),
      settingTitle: 'Meus dados',
    },
    {
      icon: require('./../../assets/icons/terms.png'),
      settingTitle: 'Termos e condições',
    },
    {
      icon: require('./../../assets/icons/phone.png'),
      settingTitle: 'Fale conosco',
    },
  ];

  function handleLogout() {
    navigation.navigate('LoginScreen');
  }

  return (
    <View style={styles.container}>
      <ProfileHeader
        onPress={() => handleLogout()}
        greeting={'Olá, João'}
        email={'joao.silva@rent-a-ride.com'}
      />
      {/* ScrollView para garantir a visualização de toda a lista mesmo em telas pequenas */}
      <ScrollView>
        <View style={styles.settingsContainer}>
          {settingsOptions.map(({icon, settingTitle}, index) => (
            <SettingOption
              icon={icon}
              settingTitle={settingTitle}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
