import {
    StyleSheet,
    Text,
    Image,
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


export const FavoritesScreen = ({ navigation, image, title, description }) => {
    const [items, setItems] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
  
    const fetchPosts = () => {
      setIsLoading(true);
      axios
        .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
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
  
    React.useEffect(fetchPosts, []);
  
    if (isLoading) {
      return <Loading />;
    }

    return (
        <View>
            <View style={styles.container} >
            <Image
                style={styles.card_image}
                source={{ uri: image }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.h1}>{title}</Text>
                <Text style={styles.description_p} numberOfLines={4}>{description}</Text>
            </View>
        </View>
        </View>
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