/* eslint-disable */

import React from 'react';

import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import ReservationsScreen from '../screens/Reservations/ReservationsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ExploreScreen from '../screens/Explore/ExploreScreen';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Explorar"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/icons/compass.png')}
              style={{width: 26, height: 26, fill: '#8F9BB3'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reservas"
        component={ReservationsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/icons/calendar.png')}
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/icons/favorites.png')}
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./../assets/icons/profile.png')}
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
