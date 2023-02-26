import { StyleSheet, TouchableOpacity, TextInput, View, Animated, useAnimatedValue } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef, Component } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { EducationsScreen } from '../screens/LearnsScreen';
import EducationScreen from '../screens/LearnScreen';
import EducationInfoScreen from '../screens/LearnInfoScreen'
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegistrationScreen';
import FullNewScreen from '../screens/FullNewScreen'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabStack = ({ navigation }) => {
    const [searchMode, setSearchMode] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [show, setShow] = useState(false);
    const position = new Animated.Value(0);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const handleSearchPress = () => {
        setSearchMode(!searchMode);
        Animated.timing(animatedValue, {
            toValue: 1, // устанавливаем значение свойства transform
            duration: 1500, // длительность анимации
            useNativeDriver: true, // включаем нативный драйвер для оптимизации производительности
        }).start(); // запускаем анимацию
    };

    const handleFocus = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleBlur = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };


    const translateX = animatedValue.interpolate({
        inputRange: [0, 10],
        outputRange: [0, 0],
    });

    const transformStyle = { transform: [{ translateX }] }

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
                component={EducationsScreen}
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
                        <View
                            style={{ paddingHorizontal: 15, alignContent: 'center' }}>
                            {searchMode && (
                                <Animated.View style={transformStyle}>
                                    <TextInput
                                        placeholder='Поиск'
                                        placeholderTextColor={'gray'}
                                        style={{
                                            backgroundColor: 'white',
                                            width: 250,
                                            height: 30,
                                            borderRadius: 10,
                                            padding: 5,
                                            marginLeft: 50,
                                            position: 'absolute',
                                        }}
                                        onChangeText={setSearchText}
                                        value={searchText}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                    />
                                </Animated.View>
                            )}
                            <TouchableOpacity onPress={handleSearchPress}>
                                <Ionicons name="search" size={25} color="white" style={{ position: 'relative', paddingBottom: 5 }} />
                            </TouchableOpacity>
                        </View>
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
                        <View
                            style={{ paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={handleSearchPress}>
                                <Ionicons name="search" size={25} color="white" style={{ position: 'relative', paddingBottom: 5 }} />
                            </TouchableOpacity>
                            {searchMode && (
                                <Animated.View style={transformStyle}>
                                    <TextInput
                                        placeholder='Поиск'
                                        placeholderTextColor={'gray'}
                                        style={{
                                            backgroundColor: 'white',
                                            width: 250,
                                            height: 30,
                                            borderRadius: 10,
                                            padding: 5,
                                            marginLeft: 20,
                                            position: 'relative',

                                        }}
                                        onChangeText={setSearchText}
                                        value={searchText}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                    />
                                </Animated.View>
                            )}
                        </View>
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
            <Stack.Screen name='EducationsScreen' component={EducationsScreen} />
            <Stack.Screen name='EducationScreen' component={EducationScreen} />
            <Stack.Screen name='AuthScreen' component={AuthScreen} />
            <Stack.Screen name='Registration' component={RegisterScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='EducationInfoScreen' component={EducationInfoScreen} />
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