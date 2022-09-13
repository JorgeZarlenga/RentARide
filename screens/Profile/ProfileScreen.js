/* eslint-disable */

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ProfileHeader } from '../../components/ProfileHeader';
import { SettingOption } from '../../components/SettingOption';
import styles from './profile-screen.styles';

const ProfileScreen = ({navigation}) => {
  const settingsOptions = [
    {
      id: '2',
      icon: require('./../../assets/icons/bell.png'),
      settingTitle: 'Notificações',
    },
    {
      id: '3',
      icon: require('./../../assets/icons/credit-card.png'),
      settingTitle: 'Meus cartões',
    },
    {
      id: '4',
      icon: require('./../../assets/icons/user.png'),
      settingTitle: 'Meus dados',
    },
    {
      id: '5',
      icon: require('./../../assets/icons/terms.png'),
      settingTitle: 'Termos e condições',
    },
    {
      id: '6',     
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
        <View style={styles.settingsContainer}>
          <FlatList
          data={settingsOptions}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <SettingOption
              icon={item.icon}
              settingTitle={item.settingTitle}
              index={item.id}
              />
            )}
          />
        </View>
    </View>
  );
};

export default ProfileScreen;
