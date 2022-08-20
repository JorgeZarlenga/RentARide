/* eslint-disable */

import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {vehiclesList} from '../../mock/cars';

import styles from './explore-screen.styles';

const ExploreScreen = ({navigation}) => {
  const [searchText, onChangeSearchText] = React.useState('');

  const icon = (
    <Image
      source={require('./../../assets/icons/search-outline.png')}
      style={styles.icon}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeSearchText}
        placeholder="Pesquisar veículos"
        value={searchText}
        inlineImageLeft={icon}
      />
      <Text style={styles.welcomeText}>Seja bem-vindo, João!</Text>

      <Image
        source={require('./../../assets/images/drivingBanner.jpg')}
        style={styles.banner}
      />

      <FlatList
        style={{flex: 1}}
        numColumns={2}
        data={vehiclesList}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetailsScreen', item)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.subtitle}>
              {item.title} {'\n'}
              R$ {item.value}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ExploreScreen;
