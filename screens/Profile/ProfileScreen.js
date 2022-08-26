/* eslint-disable */

import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

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
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#014D89', '#016FB2']}
        style={styles.profileInfoContainer}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileTextsContainer}>
            <Text style={styles.greetingText}>Olá, João!</Text>
            <Text style={styles.infoAndLogoutTexts}>
              joao.silva@rent-a-ride.com
            </Text>
            <View style={styles.logoutInfoContainer}>
              <View>
                <Text style={styles.infoAndLogoutTexts}>Não é você?&nbsp;</Text>
              </View>
              <View>
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  source={require('./../../assets/icons/profile-image.png')}
                  style={styles.profileImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
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
