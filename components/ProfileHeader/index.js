/* eslint-disable */

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export const ProfileHeader = ({onPress, greeting, email}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#014D89', '#016FB2']}
      style={styles.profileInfoContainer}>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileTextsContainer}>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.infoAndLogoutTexts}>{email}</Text>
          <View style={styles.logoutInfoContainer}>
            <View>
              <Text style={styles.infoAndLogoutTexts}>Não é você?&nbsp;</Text>
            </View>
            <View>
              <TouchableOpacity onPress={onPress}>
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
  );
};

const styles = StyleSheet.create({
  profileInfoContainer: {
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileTextsContainer: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20%',
    backgroundColor: 'transparent',
  },
  greetingText: {
    fontSize: 24,
    color: '#FFF',
  },

  infoAndLogoutTexts: {
    marginTop: 6,
    fontSize: 12,
    color: '#FFF',
  },
  logoutInfoContainer: {
    fontSize: 12,
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row',
  },
  logoutText: {
    marginTop: 6,
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#FFF',
  },
  profileImageContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
});
