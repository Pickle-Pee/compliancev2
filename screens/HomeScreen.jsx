import {
  StyleSheet,
  Image,
  View,
  RefreshControl,
  TouchableOpacity,
  Text
} from 'react-native';
import { NewPost } from '../components/News';
import { Recomendations } from '../components/Recomendations';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import firebase from '../firebase';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen = ({ navigation }) => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [recomendationData, setRecomendationData] = React.useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recomendation'),
      axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
    ])
    .then((response) => {
      const recomendationData = response[0].data;
      const news = response[1].data;
      setRecomendationData(recomendationData);
      setNews(news);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    })
    .finally(() => {
      setIsLoading(false);
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('AuthScreen');
      }
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          paddingLeft: 15,
          paddingTop: 15,
          paddingBottom: 10
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
          }}>Новости</Text>
        <View style={{
          borderBottomColor: '#B30E1F',
          borderBottomWidth: 4,
          marginTop: 0,
          width: 60
        }}></View>
      </View>
      {/* карусель новостей на главной странице */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {news.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('FullNewScreen', { id: item.id })}>
            <NewPost
              image={item.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          paddingLeft: 15,
          paddingBottom: 10
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
          }}>Рекомендуем ознакомиться</Text>
        <View style={{
          borderBottomColor: '#B30E1F',
          borderBottomWidth: 4,
          marginTop: 0,
          width: 60
        }}></View>
      </View>
      {/* карусель рекомендаций на главной странице */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {recomendationData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('EducationScreen', { id: item.id })}>
            <Recomendations
              image_recomendation={item.image_recomendation}
              title_recomendation={item.title_recomendation}
              price_recomendation={item.price_recomendation}
              description_recomendation={item.description_recomendation}
            />

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
});
