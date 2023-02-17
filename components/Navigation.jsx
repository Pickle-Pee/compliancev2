import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { EducationScreen } from '../screens/LearnsScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import React from 'react';
import { FullNewScreen } from '../screens/FullNewScreen';
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegistrationScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const AppStack = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     }
// });

// const AppNavigator = createAppContainer(isUserLoggedIn ? AppStack : AuthStack);

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Новости') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Курсы') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Избранное') {
                        iconName = focused ? 'star' : 'star-outline';
                    } else if (route.name === 'Профиль') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'Настройки') {
                        iconName = focused ? 'cog' : 'cog-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#E32636',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Новости" component={HomeScreen} />
            <Tab.Screen name="Курсы" component={EducationScreen} />
            <Tab.Screen name="Избранное" component={FavoritesScreen} />
            <Tab.Screen name="Профиль" component={ProfileScreen} />
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
                <Stack.Screen name='FullNew' component={FullNewScreen} />
                <Stack.Screen name='AuthScreen' component={AuthScreen} />
                <Stack.Screen name='Registration' component={RegisterScreen} />
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