import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Send request to server to authenticate user
        fetch('https://your-server.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
            .then(res => res.json())
            .then(data => {
                // Handle success/failure response from server
                if (data.error) {
                    // Show error message
                } else {
                    // Store JWT token and user data in AsyncStorage/redux
                }
            });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Введите почту"
                placeholderTextColor={'#000'}
                onChangeText={text => setEmail(text)}
                value={email}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Введите пароль"
                placeholderTextColor={'#000'}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                style={styles.textInput}
            />
            <TouchableOpacity 
            onPress={handleSubmit}
            style={styles.submitButton}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#333333'
    },
    textInput: {
        width: 300,
        height: 50,
        margin: 12,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
    },
    submitButton: {
        backgroundColor: '#fff',
        width: 100,
        height: 50,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
