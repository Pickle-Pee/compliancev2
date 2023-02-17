
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './components/Navigation';
import React, { useState } from 'react';
import LoginScreen from './screens/AuthScreen';

function App() {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  }
});

export default App;
