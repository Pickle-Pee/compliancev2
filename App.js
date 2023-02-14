
import { 
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Navigation } from './screens/Navigation';
import React, { useState } from 'react';
import { AuthScreen } from './screens/AuthScreen';

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <AuthScreen />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default App;