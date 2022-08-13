/* eslint-disable */

import React from 'react';
import {View, Text, TextInput, FlatList, Image, ScrollView} from 'react-native';

import styles from './explore-screen.styles';

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

  const icon = (
    <Image
      source={require('./../../assets/icons/search-outline.png')}
      style={styles.icon}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* <TextInput
          style={styles.searchInput}
          onChangeText={onChangeSearchText}
          placeholder="Pesquisar veículos"
          value={searchText}
          inlineImageLeft={icon}
        /> */}
        <Text style={styles.welcomeText}>Seja bem-vindo, João!</Text>
        {/* <View>
        <FlatList
          data={vehiclesList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View> */}
        {/* <Button onClick={() => navigation.navigate('Favoritos')} /> */}
        <Image
          source={require('./../../assets/images/drivingBanner.jpg')}
          style={styles.banner}
        />

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/hb20.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Hyundai HB20 {'\n'}
              R$ 75
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/onix.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Chevrolet Onix {'\n'}
              R$ 89
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/renegade.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Jeep Renegade {'\n'}
              R$ 120
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/x1.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              BMW X1 {'\n'}
              R$ 450
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/golf.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Volkswagen Golf {'\n'}
              R$ 230
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('./../../assets/images/compass.jpeg')}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              Jeep Compass {'\n'}
              R$ 380
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
