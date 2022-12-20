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


export const ProfileScreen = ({ avatar, name, rating, courses_count }) => {
    return (
        <View>
            <Image source={{ uri: avatar }} />
            <View>
                <Text>{name}</Text>
                <View>
                    <Text>{rating}</Text>
                    <Text>{courses_count}</Text>
                </View>
            </View>
        </View>
    );
}
