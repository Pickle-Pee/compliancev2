import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavoriteItem = ({ image, title, description, navigation }) => {
    const [favorites, setFavorites] = useState(false);

    const removeFromFavorites = async (item) => {
        try {
            // Получаем текущий список избранных элементов из AsyncStorage
            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = [];

            // Если список не пустой, парсим его из JSON в массив
            if (favorites !== null) {
                favoritesArray = JSON.parse(favorites);
            }
            const newFavorites = favoritesArray.filter((favorite) => favorite.id !== item.id);
            setFavorites(newFavorites);
            // Сохраняем обновленный список избранных элементов в AsyncStorage
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

            // Обновляем состояние isFavorite
            setFavorites(!favorites);
        } catch (e) {
            console.error(e);
        }

        console.log(favorites)
    };

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', height: 100, margin: 15 }}>
                <Image
                    style={styles.card_image}
                    source={{ uri: image }} />
                <Text style={styles.h1}>{title}</Text>
                <TouchableOpacity onPress={removeFromFavorites}>
                    <Ionicons
                        name={favorites ? 'heart-outline' : 'heart'}
                        size={30}
                        color={favorites ? 'black' : '#B30E1F'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.recentDescription}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
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
        width: '100%',
        paddingHorizontal: 15,
        fontWeight: '400'
    }
})