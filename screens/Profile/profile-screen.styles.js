/* eslint-disable */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfoContainer: {
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0265A9',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  profileTextsContainer: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20%',
    backgroundColor: 'transparent'
  },
  greetingText: {
    fontSize: 24,
    color: '#FFF'
  },
  infoAndLogoutTexts: {
    marginTop: 6,
    fontSize: 12,
    color: '#FFF'
  },
  logoutInfoContainer: {
    fontSize: 12,
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row'
  },
  infoAndLogoutTexts: {
    marginTop: 6,
    fontSize: 12,
    color: '#FFF'
  },
  logoutText: {
    marginTop: 6,
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#FFF'
  },
  profileImageContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // PENDÊNCIA: COLOCAR EM PORCENTAGEM (NÃO FUNCIONOU):
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  settingContainer: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  settingImageContainer: {
    width: '15%',
  },
  settingTextContainer: {
    justifyContent: 'center',
    paddingLeft: 20,
    width: '70%',
  },
  settingArrowContainer: {
    width: '15%',
    flex: 1
  },
  elementsCentered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingDivider: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
