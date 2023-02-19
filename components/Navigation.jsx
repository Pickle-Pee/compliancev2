import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { EducationScreen } from '../screens/LearnsScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegistrationScreen';
import QuestionScreen from '../screens/LearnScreen';
import FullNewScreen from '../screens/FullNewScreen'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = ({ navigation }) => {
    return (
        <Tab.Navigator
        initialRouteName='HomeScreen'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Courses') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'star' : 'star-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'cog' : 'cog-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#B30E1F',
                tabBarInactiveTintColor: 'black',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Главная',
                    headerStyle: {
                        backgroundColor: '#B30E1F',
                        height: 90,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: '500' },
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15, paddingBottom: 5 }}>
                            <Ionicons
                                name='notifications'
                                size={25}
                                color={'white'} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Courses"
                component={EducationScreen}
                options={{
                    title: 'Обучение',
                    headerStyle: {
                        backgroundColor: '#B30E1F',
                        height: 90,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: '500' },
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15, paddingBottom: 5 }}>
                            <Ionicons
                                name='filter'
                                size={25}
                                color={'white'} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ paddingBottom: 5, paddingHorizontal: 15 }}>
                            <Ionicons
                                name='search'
                                size={25}
                                color={'white'}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: 'Избранное',
                    headerStyle: {
                        backgroundColor: '#B30E1F',
                        height: 90,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: '500' },
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15, paddingBottom: 5 }}>
                            <Ionicons
                                name='filter'
                                size={25}
                                color={'white'} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ paddingBottom: 5, paddingHorizontal: 15 }}>
                            <Ionicons
                                name='search'
                                size={25}
                                color={'white'}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Профиль',
                    headerStyle: {
                        backgroundColor: '#B30E1F',
                        height: 90,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: '500' },
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 15, paddingBottom: 5 }}>
                            <Ionicons
                                name='notifications'
                                size={25}
                                color={'white'} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Tab' component={TabStack} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='FullNewScreen' component={FullNewScreen} />
            <Stack.Screen name='QuestionScreen' component={QuestionScreen} />
            <Stack.Screen name='AuthScreen' component={AuthScreen} />
            <Stack.Screen name='Registration' component={RegisterScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
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