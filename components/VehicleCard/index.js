/* eslint-disable */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export const VehicleCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailsScreen', item)}>
        {item.valid === 'true' ? (<Image source={{uri: item.image}} style={styles.image}/>) : (<View style={styles.imageError}><Text style={{fontSize: 24}}>SEM IMAGEM</Text></View>)}
      
      <Text style={styles.subtitle}>
        {item.title} {'\n'}
        R$ {item.value}/dia
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width: '46%',
    backgroundColor: '#F0F0F0',
    borderColor: '#D9DCDD',
    alignItems: 'flex-start',
    margin: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    height: 220,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 130,
  },
  imageError: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
  },
  icon: {
    width: 24,
    height: 24,
  },
  subtitle: {
    textAlign: 'left',
    margin: 4,
    color: '#47484C',
  },
});
