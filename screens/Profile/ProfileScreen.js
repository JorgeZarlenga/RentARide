/* eslint-disable */

import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {ProfileHeader} from '../../components/ProfileHeader';
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
      <ScrollView>
        <View style={styles.settingsContainer}>
          {/* ScrollView para garantir a visualização de toda a lista mesmo em telas pequenas */}
          {settingsOptions.map(({icon, settingTitle}, index) => (
            <TouchableOpacity key={settingTitle}>
              <View style={styles.settingContainer}>
                <View
                  style={[
                    styles.settingImageContainer,
                    styles.elementsCentered,
                  ]}>
                  <Image
                    source={icon}
                    style={{width: 26, height: 26, fill: '#8F9BB3'}}
                  />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text>{settingTitle}</Text>
                </View>
                <View
                  style={[
                    styles.settingArrowContainer,
                    styles.elementsCentered,
                  ]}>
                  <Image
                    source={require('./../../assets/icons/setting-arrow.png')}
                    style={{width: 20, height: 18}}
                  />
                </View>
              </View>
              {/* View usada como divider */}
              <View style={styles.settingDivider} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
