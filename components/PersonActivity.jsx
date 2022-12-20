import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';


export const PersonActivityPage = ({ avatar, name, rating, courses_count }) => {
    return (
        <View style={styles.container}>
            <Image 
            source={{ uri: avatar }}
            style={styles.profile_image} />
            <View style={styles.personInfo}>
                <Text style={styles.personName}>{name}</Text>
                <View>
                    <Text>{rating}</Text>
                    <Text>{courses_count}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
       
    },
    profile_image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10
    },
    personName: {
        fontSize: 30,
        fontWeight: '500'
    },
    personInfo: {
    }
})