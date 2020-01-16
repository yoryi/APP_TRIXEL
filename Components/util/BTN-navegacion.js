import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";

//Rutas de app
import { Actions } from 'react-native-router-flux';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Constantes
import Iconos from '../../Constants/Iconos';


export default class InicioScreen extends React.Component {
  render() {
    return (

      <TouchableOpacity style={styles.Boton} onPress={this.props.Ruta}>
        <Image source={this.props.Imagen} style={styles.icono} />
      </TouchableOpacity>

    )
  }
};


const styles = StyleSheet.create({

  icono: {
    height: Iconos.BTN_MENU,
    width: Iconos.BTN_MENU,
  },

  Boton: {
    paddingTop: '8%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },



});
