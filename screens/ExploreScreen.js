/* eslint-disable */

import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

const vehiclesList = [
    {
        id: '1',
        title: 'Carro 1'
    },
    {
        id: '2',
        title: 'Carro 2'
    },
    {
        id: '3',
        title: 'Carro 3'
    },
    {
        id: '4',
        title: 'Carro 4'
    },
    {
        id: '5',
        title: 'Carro 5'
    },
];

const numColumns = 2

const ExploreScreen = ({navigation}) => {

    const [searchText, onChangeSearchText] = React.useState("");

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    );

    const formatData = ({vehiclesList, numColumns}) => {
        console.log('chamou');
        const totalRows = Math.floor(vehiclesList.length / numColumns);
        let totalLastRow = vehiclesList.length - (totalRows / numColumns);

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            vehiclesList.push({id: 'blank', empty: true});
            totalLastRow++;
        }

        return vehiclesList;
    };

    return(
        <View>
            <TextInput
                style={styles.searchInput}
                onChangeText={onChangeSearchText}
                placeholder="Pesquisar veículos"
                value={searchText}
            />
            <Text style={styles.welcomeText}>Seja bem-vindo, usuário!</Text>
            <View>
                <FlatList
                    data={vehiclesList}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    numColumns={numColumns}
                />
            </View>
        </View>
    );
    
};

export default ExploreScreen;

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
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
        margin: 1
    },
});