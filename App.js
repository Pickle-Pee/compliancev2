
import { 
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Navigation } from './screens/Navigation';
import React, { useState } from 'react';
import LoginScreen from './screens/AuthScreen';

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <LoginScreen />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  }
});

export default App;
