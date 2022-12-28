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
  ActivityIndicator,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { PersonProfilePage } from '../components/ProfileInfo';
import { RecentComplete } from '../components/RecentComplete';
import { Recomendations } from '../components/Recomendations';

export const ProfileScreen = ({ navigation }) => {
  const [profileData, setProfileData] = React.useState();
  const [recentData, setRecentData] = React.useState();
  const [recomendationData, setRecomendationData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchUserInfo = () => {
    setIsLoading(true);
    axios
      .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/users')
      .then(({ data }) => {
        setProfileData(data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      }).finally(() => {
        setIsLoading(false);
      });
  }

  const fetchRecentData = () => {
    axios
      .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recent')
      .then(({ data }) => {
        setRecentData(data);
      })
  }

  const fetchRecomendationData = () => {
    axios
      .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recomendation')
      .then(({ data }) => {
        setRecomendationData(data);
      })
  }

  React.useEffect(fetchUserInfo, []);
  React.useEffect(fetchRecentData, []);
  React.useEffect(fetchRecomendationData, []);



  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <PersonProfilePage
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/717.jpg" // {profileData.avatar}
        name="Lisa Auer" // {profileData.name}
        rating="7" // {profileData.rating}
        courses_count="15" // {profileData.courses_count}
      />
      <RecentComplete
        image_recent="https://vsegda-pomnim.com/uploads/posts/2022-03/1647611573_1-vsegda-pomnim-com-p-karibskoe-more-foto-1.jpg" // {recentData.image_recent}
        title_recent="quantifying" // {recentData.title_recent}
      />
      <Recomendations
        image_recomendation="https://mirpozitiva.ru/wp-content/uploads/2019/11/1480494344_kot_sneg.jpg"// {recomendationData.image_recomendation}
        title_recomendation="Human Identity Architect" // {recomendationData.title_recomendation}
        price_recomendation="916.00 P" // {recomendationData.price_recomendation}
      />
    </ScrollView>
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
