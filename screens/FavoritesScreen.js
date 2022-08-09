/* eslint-disable */

import React from 'react';
import {View, Text, Image} from 'react-native';

const FavoritesScreen = ({navigation}) => {

    return(
        <View>
            <Text>Favoritoss</Text>
            <Image source={require("../assets/icons/compass.png")}/>
        </View>
    );
    
};

export default FavoritesScreen;

/* const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
}); */