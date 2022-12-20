import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios';
import React, { useState } from 'react';
import { Loading } from '../components/Loading';
import { PersonProfilePage } from '../components/Profile';

export const ProfileScreen = ({ navigation }) => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchUserInfo = () => {
    setIsLoading(true);
    axios
      .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/users')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(fetchUserInfo, []);

  if (isLoading) {
    return <Loading />;
  }

  return (

    <PersonProfilePage
      avatar="https://c4.wallpaperflare.com/wallpaper/705/683/792/ai-art-winter-snow-christmas-bokeh-hd-wallpaper-preview.jpg"
      name="Иванов Иван"
      rating="Ваш рейтинг: 7.7"
      courses_count="Количество пройденных курсов : 9"
    />
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

});
