/* eslint-disable */

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Image } from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ReservationsScreen from '../screens/ReservationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Explorar"
                component={ExploreScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./../assets/icons/compass.png")} style={{width: 26, height: 26}} />)
                }}
            />
            <Tab.Screen
                name="Reservas"
                component={ReservationsScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./../assets/icons/calendar.png")} style={{width: 26, height: 26}} />)
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./../assets/icons/favorites.png")} style={{width: 26, height: 26}} />)
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (<Image source={require("./../assets/icons/profile.png")} style={{width: 26, height: 26}} />)
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
