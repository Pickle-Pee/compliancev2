import axios from "axios";
import React, { Component, useLayoutEffect, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";


const FullNewScreen = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const { id, image, title, description } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Профиль',
            headerStyle: {
                backgroundColor: '#B30E1F',
                height: 200,
            },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: '500' },
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

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
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.new_image}/>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    new_image: {
        width: '100%',
        height: 200,
        borderRadius: 30

    }
})

export default FullNewScreen;