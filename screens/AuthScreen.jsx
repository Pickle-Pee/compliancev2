import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Keyboard
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import firebase from '../firebase';

export default function AuthScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Login successful');
            navigation.navigate('Tab');
          })
          .catch(error => {
            console.log(error);
          });
      };

    const handlePress = () => {
        Keyboard.dismiss()
    }


    const logo = require('../resources/images/logo.png')

    const goReg = () => {
        console.log('Pressed');
        navigation.navigate('Registration');
      };

    return (
        // <TouchableWithoutFeedback onPress={handlePress} style={styles.mainCont}>
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor="#003f5c"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Пароль"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                        <Text style={styles.loginText}>Вход</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.regBtn}
                    onPress={goReg}>
                        <Text 
                        style={styles.regText}>
                            Регистрация</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resetPass}>
                        <Text>Не получается войти?</Text>
                    </TouchableOpacity>
            </View>
        // </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '20%'
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: '1,5',
        borderColor: '#B30E1F',
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 25,
        height: 50,
        borderWidth: 2,
        borderColor: '#B30E1F',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    regBtn: {
        width: '80%',
        backgroundColor: '#B30E1F',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    loginText: {
        color: '#B30E1F',
        fontWeight: '700'
    },
    regText: {
        color: 'white',
        fontWeight: '700'
    }
});
