import { StackActions } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Loading } from "../components/Loading";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";


export const FullNewScreen = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const {id, image, title, description} = route.params;

    console.log(route);

    React.useEffect(() => {
        axios
            .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test/' + id)
            .then(({ data }) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    // console.log(data.image)

    if (isLoading) {
        return <Loading />
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image 
                source={{ uri: data.image }} 
                style={styles.new_image}
                />
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    new_image: {
        width: '100%',
    }
})