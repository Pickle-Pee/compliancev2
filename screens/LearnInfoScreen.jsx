import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


const EducationInfoScreen = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const { id, image, title, description } = route.params;
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

    useEffect(() => {
        Promise.all([
            axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test/' + id)
        ])
            .then((response) => {
                const data = response[0].data;
                setData(data);
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
        return <Loading />
    }

    return (
        <View>
            <View style={{
                backgroundColor: '#B30E1F',
                height: 90
            }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', paddingTop: 55, paddingLeft: 10 }}
                    onPress={() => {
                        if (navigation.canGoBack()) {
                            navigation.goBack();
                        } else {
                            navigation.navigate('HomeScreen');
                        }
                    }}>
                    <Ionicons
                        name="ios-arrow-back"
                        size={20}
                        color={'white'}
                    />
                    <Text style={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 18
                    }}>Назад</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', height: 100, width: '100%' }}>
                    {data && data.image && <Image
                        style={styles.new_image}
                        source={{ uri: data.image }} />}
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        {data && data.title && <Text style={styles.h1}>{data.title}</Text>}
                        <TouchableOpacity style={styles.recentPrice}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                    color: '#B30E1F',
                                }}
                            >1000 ₽</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleFavoritePress}>
                        <Ionicons
                            name={isFavorite ? 'heart' : 'heart-outline'}
                            size={30}
                            color={isFavorite ? '#B30E1F' : 'black'}
                        />
                    </TouchableOpacity>
                </View>
                {data && data.image && <Text style={{ fontSize: 18, paddingTop: 20 }}>{data.description}</Text>}
            </ScrollView>
        </View>

    )
}

// как вернуться на предыдущий экран react native

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    },

    new_image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    preview: {
        flexDirection: 'row',
        height: 100,
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        paddingLeft: 10,
    },
    recentPrice: {
        borderColor: '#B30E1F',
        borderRadius: 15,
        borderWidth: '1.5',
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 45
    },
})

export default EducationInfoScreen;