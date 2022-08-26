/* eslint-disable */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // PENDÊNCIA: COLOCAR EM PORCENTAGEM (NÃO FUNCIONOU):
  settingContainer: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
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
    flex: 1,
  },
  elementsCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingDivider: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
