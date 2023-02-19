import {
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
} from 'react-native';
import { Recomendations } from '../components/Recomendations';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Loading } from '../components/Loading';

export const EducationScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [recomendationData, setRecomendationData] = React.useState([]);

    useEffect(() => {
        Promise.all([
            axios.get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/recomendation')
        ])
            .then((response) => {
                const recomendationData = response[0].data;
                setRecomendationData(recomendationData);
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
        return <Loading />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.postList}
                data={recomendationData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Recomendations
                            image_recomendation={item.image_recomendation}
                            tile_recomendation={item.title_recomendation}
                            price_recomendation={item.price_recomendation}
                        />
                    </TouchableOpacity>
                )}
            >
            </FlatList>
        </View>
    );
}


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
