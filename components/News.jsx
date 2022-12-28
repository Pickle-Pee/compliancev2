import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


export const NewPost = ({ title, image, description }) => {

    const Stack = createStackNavigator();

    return (
        <View style={styles.container} >
            <Image
                style={styles.card_image}
                source={{ uri: image }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.h1}>{title}</Text>
                <Text style={styles.description_p} numberOfLines={4}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 500,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        margin: 10,
        flex: 1
    },
    h1: {
        fontWeight: '800',
        fontSize: 20,
        margin: 5
    },
    card_image: {
        width: '100%',
        height: '60%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flex: 3
    },
    description_p: {
        textAlign: 'justify',
        margin: 10
    }
});
