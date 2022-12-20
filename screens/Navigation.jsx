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
import { HomeScreen } from './Home';
import { EducationScreen } from './Learns';
import { FavoritesScreen } from './Favorites';
import { ProfileScreen } from '../components/Profile';
import React, { useState } from 'react';
import { StackView } from '@react-navigation/stack';
import { FullNew } from './FullNew';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name='FullNew' component={FullNew}/>
            </Stack.Navigator> */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Новости') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Каталог') {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === 'Избранное') {
                            iconName = focused ? 'star' : 'star-outline';
                        } else if (route.name === 'Профиль') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        } else if (route.name === 'Настройки') {
                            iconName = focused ? 'cog' : 'cog-outline';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#E32636',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Новости" component={HomeScreen} />
                <Tab.Screen name="Каталог" component={EducationScreen} />
                <Tab.Screen name="Избранное" component={FavoritesScreen} />
                <Tab.Screen name="Профиль" component={ProfileScreen} />
                {/* <Tab.Screen name="Настройки" component={SettingsScreen} />  */}
            </Tab.Navigator>
        </NavigationContainer>
    )
};


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