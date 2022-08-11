/* eslint-disable */

import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import {Button} from '../components/Button';

const vehiclesList = [
  {
    id: '1',
    title: 'Carro 1',
  },
  {
    id: '2',
    title: 'Carro 2',
  },
  {
    id: '3',
    title: 'Carro 3',
  },
  {
    id: '4',
    title: 'Carro 4',
  },
  {
    id: '5',
    title: 'Carro 5',
  },
];

const numColumns = 2;

const ExploreScreen = ({navigation}) => {
  const [searchText, onChangeSearchText] = React.useState('');

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const formatData = ({vehiclesList, numColumns}) => {
    console.log('chamou');
    const totalRows = Math.floor(vehiclesList.length / numColumns);
    let totalLastRow = vehiclesList.length - totalRows / numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      vehiclesList.push({id: 'blank', empty: true});
      totalLastRow++;
    }

    return vehiclesList;
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeSearchText}
        placeholder="   Pesquisar veículos"
        value={searchText}
      />
      <Text style={styles.welcomeText}>Seja bem-vindo, usuário!</Text>
      {/* <View>
        <FlatList
          data={vehiclesList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View> */}
      <Button onClick={() => navigation.navigate('Favoritos')} />

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require('./../assets/images/hb20.jpeg')}
            style={styles.image}
          />
          <Text>Ola</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('./../assets/images/hb20.jpeg')}
            style={styles.image}
          />
          <Text>Ola</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('./../assets/images/hb20.jpeg')}
            style={styles.image}
          />
          <Text>Ola</Text>
        </View>
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    height: 32,
    borderRadius: 6,
    marginHorizontal: 10,
    borderColor: '#c7c7c7',
  },
  welcomeText: {
    fontSize: 25,
    padding: 20,
  },
  item: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    margin: 1,
  },
  card: {
    borderWidth: 1,
    width: '50%',
    height: '25%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  cardContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '70%',
  },
});
