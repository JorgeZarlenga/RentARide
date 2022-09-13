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

import { VehicleCard } from '../../components/VehicleCard';

import styles from './explore-screen.styles';

const ExploreScreen = ({navigation}) => {
  
  const vehicleAPI = 'https://rent-a-ride.getsandbox.com:443/controle/veiculos';

  const [vehiclesSource, setVehiclesSource] = useState([]);
  const [emptyFilteredVehiclesList, setEmptyFilteredVehiclesList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [vehiclesList, setVehiclesList] = useState([]);
  const vehiclesListWithValidatedImages = [];
  
  useEffect(() => {
    fetch(vehicleAPI)
    .then((response) => response.json())
    .then((json) => handleInitialLoading(json.veiculos))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
  }, []);

  function handleInitialLoading(data) {
    let vehiclesListToVerifyImages = [...data];

    // Verificação de validade dos links de imagens:
    for (let index = 0; index < vehiclesListToVerifyImages.length; index++) {
      let element = vehiclesListToVerifyImages[index];
      fetch(element.image, { method: "HEAD" })
      .then(() => changeImagesStatuses(element, 'true'))
      .catch(() => changeImagesStatuses(element, 'false'))
      .finally(() => initializeSources(vehiclesListWithValidatedImages));
    }
  }

  function initializeSources(vehiclesListWithValidatedImages) {
    setVehiclesSource(vehiclesListWithValidatedImages);
    setVehiclesList(vehiclesListWithValidatedImages);
  }

  function changeImagesStatuses(element, status) {
    element['valid'] = status;
    vehiclesListWithValidatedImages.push(element);
  }

  function resetSearchTextInput() {
    setSearchText('');
    setVehiclesList(vehiclesSource);
    setEmptyFilteredVehiclesList(false);
  }

  useEffect(() => {
    if (searchText === '') {
      setVehiclesList(vehiclesSource);
    } else {
      let filteredVehiclesList = vehiclesSource.filter(item => (item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1));
      setVehiclesList(filteredVehiclesList);
      if (filteredVehiclesList.length === 0) {
        setEmptyFilteredVehiclesList(true);
      } else {
        setEmptyFilteredVehiclesList(false);
      }
    }
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearchText(text)}
            placeholderTextColor='#000'
            placeholder="Pesquisar veículos"
            value={searchText}
        />
        <TouchableOpacity
          style={styles.closeButtonParent}
          onPress={() => resetSearchTextInput()}
        >
          <Image
            style={styles.closeButton}
            source={require("./../../assets/icons/clear-search-input.png")}
          />
        </TouchableOpacity>

      </View>
      <Text style={styles.welcomeText}>Seja bem-vindo, João!</Text>
      {
        isLoading
        ?
        // Exibição do indicador de carregamento enquanto os dados da API são carregados:
        (
          <View style={styles.centeredActivityIndicator}>
            <ActivityIndicator/>
          </View>
        )
        :
        // Exibição da lista de veículos após carregamento:
        ( 
          <View style={styles.container}>
              {
                emptyFilteredVehiclesList
                ?
                // Exibição de mensagem sobre nenhum resultado encontrado na busca:
                (
                  <View style={styles.centeredActivityIndicator}>
                    <Image
                      source={require('./../../assets/images/magnifiying-glass.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.notFoundText}>
                      Sua pesquisa não retornou nenhum veículo
                    </Text>
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
                          <VehicleCard
                          item={item}
                          navigation={navigation}/>
                        )}
                      />
                  </View>
                )
              }
          </View>
        )
      }        
    </SafeAreaView>
  );
};

export default ExploreScreen;
