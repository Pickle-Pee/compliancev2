import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FavoriteItem } from '../components/FavoriteItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavoritesScreen = ({ item, navigation }) => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            if (favorites !== null) {
                setFavorites(JSON.parse(favorites));
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <View style={styles.container} >
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}>
                {favorites.length === 0 ? (
                    <Text>Empty here</Text>
                ) : (favorites.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('FullNewScreen', { id: item.id })}>
                        <FavoriteItem
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </TouchableOpacity>
                ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        display: 'flex',
        height: '100%',
    },
    h1: {
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: 10,
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