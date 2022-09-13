/* eslint-disable */

import React from 'react';
import { Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import styles from './details-screen.styles';

export const DetailsScreen = ({route, navigation}) => {
  const item = route.params;
  return (
    <SafeAreaView>
      <Header onClick={() => navigation.goBack()} title={'Detalhes'} />
      <ScrollView>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.description}>Sobre este carro</Text>
        <Text style={styles.text}>{item.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
