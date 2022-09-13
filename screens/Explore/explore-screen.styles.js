/* eslint-disable */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredActivityIndicator: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  parent: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  closeButton: {
    height: 16,
    width: 16,
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderRadius: 6,
    borderColor: '#C7C7C7',
    color: '#000'
  },
  notFoundText: {
    marginTop: 16,
    color: '#000'
  },
  welcomeText: {
    fontSize: 25,
    padding: 20,
    fontWeight: '600',
    color: '#0670BF',
  },
});

export default styles;
