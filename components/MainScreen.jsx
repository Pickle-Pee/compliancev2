import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


export const NewPost = ({ title, image, description}) => {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.card_image} 
        source={{uri: image}}/>
        <Text style={styles.h1}>{title}</Text>
        <Text>{description}</Text>
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
