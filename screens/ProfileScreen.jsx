import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Loading } from '../components/Loading';
import { PersonProfilePage } from '../components/ProfileInfo';
import { RecentItem } from '../components/RecentItem';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const ProfileScreen = ({ navigation }) => {
  // const [profileData, setProfileData] = React.useState();
  const [recentData, setRecentData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recent'),
      // axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/users')
    ])
      .then((response) => {
        const recentData = response[0].data;
        // const personData = response[1].data;
        setRecentData(recentData);
        // setProfileData(personData);
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

  // const personProfile = profileData[30];

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <PersonProfilePage
        avatar= 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/490.jpg' //{personProfile.avatar}
        name= 'Petya' //{personProfile.name}
        rating='228' //{personProfile.rating}
        courses_count='228'  //{personProfile.courses_count}
      />
      <View style={{ backgroundColor: 'white', paddingHorizontal: 15, paddingBottom: 25 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500'
          }}
        >Недавно пройденные</Text>
        <View style={{
          borderBottomColor: '#B30E1F',
          borderBottomWidth: 4,
          marginTop: 0,
          width: 60
        }}></View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}>
        {recentData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('FullNewScreen', { id: item.id })}>
            <RecentItem
              image_recent={item.image}
              title_recent={item.title_recent}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500'
          }}
        >Настройки</Text>
        <View style={{
          borderBottomColor: '#B30E1F',
          borderBottomWidth: 4,
          marginTop: 0,
          width: 60
        }}></View>
        <TouchableOpacity style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name='person-outline'
            color={'black'}
            size={28}
           />
           <Text style={{
            fontSize: 18,
            fontWeight: '400',
            paddingLeft: 15
          }}>Аккаунт</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name='brush-outline'
            color={'black'}
            size={28}
           />
           <Text style={{
            fontSize: 18,
            fontWeight: '400',
            paddingLeft: 15
          }}>Тема оформления</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name='notifications-outline'
            color={'black'}
            size={28}
           />
           <Text style={{
            fontSize: 18,
            fontWeight: '400',
            paddingLeft: 15
          }}>Уведомления</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

});
