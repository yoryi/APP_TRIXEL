import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Componente Router
import Router from './router/router'


export default function App() {
  return (

    <Router/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
