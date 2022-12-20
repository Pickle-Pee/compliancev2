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
  import { NewPost } from '../components/News';
  import axios from 'axios';
  import React, { useState } from 'react';
  
  export const ProfileScreen = ({ navigation }) => {
    const [items, setItems] = React.useState('');
  
    React.useEffect(() => {
      axios
        .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/users')
        .then(({ data }) => {
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }, []);
  
    return (
      <ProfilePage
        avatar="https://loremflickr.com/640/480/cats"
        name='Test'
        rating='Test'
        courses_count='Test'
      >
  
      </ProfilePage>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },
    postList: {
      width: '100%',
      marginTop: 10
    }
  });
  