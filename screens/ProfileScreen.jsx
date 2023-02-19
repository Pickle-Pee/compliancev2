import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { PersonProfilePage } from '../components/ProfileInfo';
import { RecentComplete } from '../components/RecentComplete';
import { Recomendations } from '../components/Recomendations';

export const ProfileScreen = ({ navigation }) => {
  const [profileData, setProfileData] = React.useState();
  const [recentData, setRecentData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/users'),
      axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recent')
    ])
      .then((response) => {
        const profileData = response[0].data;
        const recentData = response[1].data;
        setProfileData(profileData);
        setRecentData(recentData);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const personProfile = profileData[2];

  return (
    <ScrollView>
      <PersonProfilePage
        avatar={personProfile.avatar}
        name={personProfile.name}
        rating={personProfile.rating}
        courses_count={personProfile.courses_count}
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
