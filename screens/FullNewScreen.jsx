import axios from "axios";
import React, { useLayoutEffect, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";


const FullNewScreen = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const { id, image, title, description } = route.params;

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
                {data && data.image && <Image
                    source={{ uri: data.image }}
                    style={styles.new_image} />}
                {data && data.title &&<Text style={{
                    paddingVertical: 20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    textTransform: 'capitalize'
                }}>{data.title}</Text>}
                {data && data.image && <Text style={{ fontSize: 18 }}>{data.description}</Text>}
            </ScrollView>
        </View>

    )
}

// как вернуться на предыдущий экран react native

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    new_image: {
        width: '100%',
        height: 200,
        borderRadius: 30,

    }
})

export default FullNewScreen;