import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


export const NewPost = () => {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.card_image} 
        source={{uri: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'}}/>
        <Text style={styles.h1}>Новость</Text>
        <Text>Текст новости</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    height: 400,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  h1: {
    fontWeight: '800',
    fontSize: 20,
    margin: 5
  },
  card_image: {
    width: '100%',
    height: '70%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  }
});
