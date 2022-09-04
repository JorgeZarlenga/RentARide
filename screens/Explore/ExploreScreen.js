/* eslint-disable */

import React, { useState, useEffect } from 'react';

import {
  Image,
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import styles from './explore-screen.styles';

const ExploreScreen = ({navigation}) => {
  
  const vehicleAPI = 'https://rent-a-ride.getsandbox.com:443/controle/veiculos';

  const [vehiclesSource, setVehiclesSource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [vehiclesList, setVehiclesList] = useState([]);
  
  useEffect(() => {
    console.log('iniciou: ' + isLoading);
    fetch(vehicleAPI)
    .then((response) => response.json())
    .then((json) => handleInitialLoading(json.veiculos))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
  }, []);

  function handleInitialLoading(data) {
    setVehiclesSource(data);
    console.log('data', data);
    setVehiclesList(data);
  }

  useEffect(() => {
    console.log('aa');
    if (searchText === '') {
      setVehiclesList(vehiclesSource);
      console.log('listaaa: ', vehiclesList);
    } else {
      console.log('filtra: ', vehiclesList);

      setVehiclesList(
        vehiclesSource.filter(item => (item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
      );
    }
  }, [searchText]);

 /*  const icon = (
    <Image
      source={require('./../../assets/icons/search-outline.png')}
      style={styles.icon}
    />
  ); */

  return (
    <SafeAreaView style={styles.container}>
      
    <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Pesquisar veículos"
          value={searchText}
          // inlineImageLeft={icon}
        />
        <Text style={styles.welcomeText}>Seja bem-vindo, João!</Text>

        {
          isLoading
          ?
          (
            <View style={styles.centeredActivityIndicator}>
              <ActivityIndicator/>
            </View>
          )
          :
          (
              <View style={styles.container}>
                <FlatList
                style={{flex: 1}}
                numColumns={2}
                data={vehiclesList}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('DetailsScreen', item)}>
                    <Image source={{uri: item.image}} style={styles.image} />
                    <Text style={styles.subtitle}>
                      {item.title} {'\n'}
                      R$ {item.value}/dia
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )
        }        
    </SafeAreaView>
  );
};

export default ExploreScreen;
