import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';


export const EducationItem = ({ image_recomendation, title_recomendation, price_recomendation, description_recomendation, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);


  const handleFavoritePress = () => {
      if (isFavorite) {
          const newFavoriteItems = favoriteItems.filter(item => item !== title_recomendation);
          setFavoriteItems(newFavoriteItems);
      } else {
          const newFavoriteItems = [...favoriteItems, title_recomendation];
          setFavoriteItems(newFavoriteItems);
      }
      setIsFavorite(!isFavorite);
      console.log(favoriteItems)
  };
  return (
      <View style={styles.container} >
          <View style={{ flexDirection: 'row', height: 100, margin: 15 }}>
              <Image
                  style={styles.card_image}
                  source={{ uri: image_recomendation }} />
              <Text style={styles.h1}>{title_recomendation}</Text>
              <TouchableOpacity onPress={handleFavoritePress}>
                  <Ionicons
                      name={isFavorite ? 'heart' : 'heart-outline'}
                      size={30}
                      color={isFavorite ? '#B30E1F' : 'black'}
                  />
              </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={styles.recentPrice}>{price_recomendation} ₽</Text>
              <Text style={styles.recentDescription}>{description_recomendation}</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      width: 350,
      borderRadius: 15,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      margin: 10,
      height: 200
  },
  h1: {
      fontWeight: '600',
      fontSize: 18,
      paddingHorizontal: 10,
      width: '60%'
  },
  card_image: {
      width: '30%',
      height: '100%',
      borderRadius: 15
  },
  recentPrice: {
      fontSize: 16,
      fontWeight: '600',
      color: '#B30E1F',
      paddingTop: 40,
  },
  recentDescription: {
      fontSize: 16,
      width: '70%',
      paddingLeft: 15,
      fontWeight: '400'
  }
})