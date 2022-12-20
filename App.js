import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NewPost } from './components/MainScreen'
import axios from 'axios'
import React from 'react';


function HomeScreen({ navigation }) {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    axios
    .get('https://63a0636424d74f9fe836ccd4.mockapi.io/news/test')
    .then(({ data }) => {
      setItems(data);
    })
    .catch(err => {
      console.log(err);
      alert('ошибка');
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StackView>
        {items.map((obj) => (
          <NewPost
          image={obj.image}
          title={obj.title}
          description={obj.description}
          />
        ))}
      </StackView>
    </SafeAreaView>
  );
}

function EducationScreen({ navigation }) {
  return (
    <View>

    </View>
  )
}

function FavoritesScreen({ navigation }) {
  return (
    <View>
      
    </View>
  )
}

function ProfileScreen({ navigation }) {
  return (
    <View>
      
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      
    </View>
  )
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Главная'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Главная') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Обучение') {
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
        <Tab.Screen name="Главная" component={HomeScreen}/>
        <Tab.Screen name="Обучение" component={EducationScreen}/>
        <Tab.Screen name="Избранное" component={FavoritesScreen}/>
        <Tab.Screen name="Профиль" component={ProfileScreen}/>
        <Tab.Screen name="Настройки" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: 'flex',
    width: '100%'
  },
});
