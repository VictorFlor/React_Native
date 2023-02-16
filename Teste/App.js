import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <View>
          <Header/>
        </View>
        <View>
          <Text>Apenas testando 1 2 3</Text>
        </View>
        <View>
          <Text>Testando outro texto</Text>
        </View>
       </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#566573',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
