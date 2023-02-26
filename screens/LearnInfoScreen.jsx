import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import DropdownList from "../components/LearnInfoStructureItem";
import LearnInfoItem from "../components/LearnInfoInfoItem";
import RatingItem from "../components/LearnInfoRatingItem";
import TeachersItem from "../components/LearnInfoTeachersItem";



const EducationInfoScreen = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    const [icons, setIcon] = useState();


    const handleFavoritePress = () => {
        if (isFavorite) {
            const newFavoriteItems = favoriteItems.filter(item => item !== title_recomendation);
            setFavoriteItems(newFavoriteItems);
        } else {
            const newFavoriteItems = [...favoriteItems, title_recomendation];
            setFavoriteItems(newFavoriteItems);
        }
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        Promise.all([
            axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test/1'),
            axios.get('https://63fa8edf7a045e192b5bf365.mockapi.io/api/testIcons/1')
        ])
            .then((response) => {
                const data = response[0].data;
                const icons = response[1].data;
                setData(data);
                setIcon(icons);
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
                        name="chevron-back"
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
            <View style={{ flexDirection: 'row', height: 100, width: '100%', marginBottom: 20, padding: 10 }}>
                <Image
                    style={styles.new_image}
                    source={{ uri: data.image }} />
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.h1}>{data.title}</Text>
                    <TouchableOpacity style={styles.recentPrice}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'white',
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
            <View style={styles.infoRowBlock}>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('info')}>
                    <Text style={styles.rowText}>Инфо</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('reviews')}>
                    <Text>Отзывы</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('teachers')}>
                    <Text>Преподаватели</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('structure')}>
                    <Text>Структура</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ height: 550 }} contentContainerStyle={{ flexGrow: 1 }}>
                {activeButton === 'info' && (
                    <View>
                        <LearnInfoItem
                            description={data.description}
                            title={data.title}
                            icon={icons.icon}
                        />
                    </View>
                )}
                {activeButton === 'reviews' && (
                    <View>
                        <RatingItem />
                    </View>
                )}
                {activeButton === 'teachers' && (
                    <View>
                        <TeachersItem
                        teachPhoto={icons.icon} />
                    </View>
                )}
                {activeButton === 'structure' && (
                    <View>
                        <DropdownList />
                        <DropdownList />
                    </View>
                )}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: 10000
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
        backgroundColor: '#B30E1F',
        borderRadius: 15,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 45
    },
    infoRowBlock: {
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: '#B30E1F',
        borderTopWidth: '1.5',
        borderBottomColor: '#B30E1F',
        borderBottomWidth: '1.5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    rowButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    rowActiveButton: {
        backgroundColor: '#B30E1F',
        borderRadius: 10
    },
    rowActiveText: {
        color: 'white'
    },
    rowText: {
        color: 'black'
    }
})

export default EducationInfoScreen;