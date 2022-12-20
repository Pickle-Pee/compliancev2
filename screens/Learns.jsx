import {
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    StatusBar,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NewPost } from '../components/News';
import axios from 'axios';
import React, { useState } from 'react';

export const EducationScreen = ({ navigation }) => {
    const [items, setItems] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchPosts = () => {
        setIsLoading(true);
        axios
            .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
            .then(({ data }) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    React.useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size='large' />
                <Text style={{ marginTop: 20, fontWeight: '600' }}>Загрузка новостей...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
                }
                style={styles.postList}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <NewPost
                            image={item.image}
                            title={item.title}
                            description={item.description} />
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
