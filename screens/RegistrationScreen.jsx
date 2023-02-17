import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import firebase from '../firebase';

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Если регистрация прошла успешно, перенаправляем пользователя на главную страницу.
        navigation.navigate('Tab');
      })
      .catch(error => {
        // Если произошла ошибка, выводим сообщение об ошибке.
        console.log(error);
      });
  };

  const logo = require('../resources/images/logo.png')

  return (
    <View style={styles.container}>
        <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Введите Email"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Введите пароль"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Повторите пароль"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.loginText}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetPass} onPress={navigation.navigate('AuthScreen')}>
                <Text>Уже зарегистрированы? Войти</Text>
            </TouchableOpacity>
    </View>
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


export default RegisterScreen;
