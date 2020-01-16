import React, { Component, View, Image, Text } from 'react';
import { Router, Scene } from 'react-native-router-flux';

//Screen de vistas de app
import ListasScreen from '../screen/ListasScreen'
import DetallesScreen from '../screen/DetallesScreen'

const App = () => {
  return (
    <Router >
      <Scene key="root">

        <Scene
          key="Listas"
          component={ListasScreen}
          type='reset'
          hideNavBar
          initial

        />

        <Scene
          key="Detalles"
          component={DetallesScreen}
          type='reset'
          hideNavBar
        />

      </Scene>
    </Router>
  );
}

export default App;