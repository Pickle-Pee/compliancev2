import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NewPost } from './components/MainScreen'


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NewPost/>
        <NewPost/>
        <NewPost/>
        <NewPost/>
        <NewPost/>
        <NewPost/>
        <NewPost/>
      </ScrollView>
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
