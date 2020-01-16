import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";


//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Constantes
import Iconos from '../../Constants/Iconos';


export default class InicioScreen extends React.Component {
  render() {
    return (

      <TouchableOpacity style={styles.Boton} onPress={() => this.props.Ruta}>
        <Image source={this.props.Imagen} style={styles.icono} />
      </TouchableOpacity>

    )
  }
};

const styles = StyleSheet.create({

  icono: {
    height: Iconos.BTN_INF,
    width: Iconos.BTN_INF,
  },

  Boton: {
    paddingTop: '0%',
    paddingLeft: '0%',
    paddingRight: '0%',
    position: 'absolute',
    marginTop: '-0%'
  },


});