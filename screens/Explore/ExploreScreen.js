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

/*   function checkFIle (url)  {
    return );
  }; */
  
  const vehicleAPI = 'https://rent-a-ride.getsandbox.com:443/controle/veiculos';

  const [vehiclesSource, setVehiclesSource] = useState([]);
  const [emptyFilteredVehiclesList, setEmptyFilteredVehiclesList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [vehiclesList, setVehiclesList] = useState([]);
  const vehiclesListWValidatedImages = [];
  
  useEffect(() => {
    fetch(vehicleAPI)
    .then((response) => response.json())
    .then((json) => handleInitialLoading(json.veiculos))
    .catch((error) => alert(error))
    .finally(() => setIsLoading(false));
  }, []);

  function handleInitialLoading(data) {
    let vehiclesListToVerifyImages = [...data];

    for (let index = 0; index < vehiclesListToVerifyImages.length; index++) {
      let element = vehiclesListToVerifyImages[index];
      fetch(element.image, { method: "HEAD" })
      .then(() => changeImagesStatuses(element, 'true'))
      .catch(() => changeImagesStatuses(element, 'false'))
      .finally(() => initializeSources(vehiclesListWValidatedImages));
    }
  }

  function initializeSources(vehiclesListWValidatedImages) {
    setVehiclesSource(vehiclesListWValidatedImages);
    setVehiclesList(vehiclesListWValidatedImages);
  }

  function changeImagesStatuses(element, status) {
    element['valid'] = status;
    vehiclesListWValidatedImages.push(element);
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
                {
                  emptyFilteredVehiclesList
                  ?
                  (
                    <View style={styles.centeredActivityIndicator}>
                      <Image
                        source={require('./../../assets/images/magnifiying-glass.png')}
                        style={styles.icon}
                      />
                      <Text style={{marginTop: 16}}>
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
                          <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate('DetailsScreen', item)}>
                              {item.valid === 'true' ? (<Image source={{uri: item.image}} style={styles.image}/>) : (<View style={styles.imageError}><Text style={{fontSize: 24}}>SEM IMAGEM</Text></View>)}
                            
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
            </View>
          )
        }        
    </SafeAreaView>
  );
};

export default ExploreScreen;
