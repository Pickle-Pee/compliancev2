import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './Home';
import { EducationScreen } from './Learns';
import { FavoritesScreen } from './Favorites';
import { ProfileScreen } from './Profile';
import React from 'react';
import { FullNewScreen } from './FullNew';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from './AuthScreen';
import { createAppContainer } from 'react-navigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const AuthStack = createStackNavigator({
//     Login: {
//         screen: AuthScreen
//     }
// });

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
                    // You can return any component that you like here!
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
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Tab' component={TabStack} />
                <Stack.Screen name='FullNew' component={FullNewScreen} />

            </Stack.Navigator>

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