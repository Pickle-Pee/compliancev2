import axios from "axios";
import React from "react";
import { View, Text, Image } from "react-native";
import { Loading } from "../components/Loading";

export const FullNew = ({ navigation, route }) => {
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
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

    if (isLoading) {
        return <Loading />
    }

    return (
        <View>
            <Image source={{ uri: data.image }} />
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
        </View>
    )
}

const styles = {

}