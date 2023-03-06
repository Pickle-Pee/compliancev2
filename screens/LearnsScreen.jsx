import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EducationItem } from '../components/LearnItem';
import { Loading } from '../components/Loading';


export const EducationsScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [recomendationData, setRecomendationData] = React.useState([]);
    const [activeButton, setActiveButton] = useState('allCourses');

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
        <View >
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('myCourses')}>
                    <Text style={styles.rowText}>Все курсы</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rowButton}
                    onPress={() => setActiveButton('allCourses')}>
                    <Text style={styles.rowText}>Мои курсы</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}>
                {recomendationData.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('EducationInfoScreen', { id: item.id })}>
                        <EducationItem
                            image={item.image_recomendation}
                            title={item.title_recomendation}
                            price={item.price_recomendation}
                            description={item.description_recomendation}
                        />
                    </TouchableOpacity>
                ))}
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
    },
    rowButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    rowText: {
        fontSize: 16
    }
})