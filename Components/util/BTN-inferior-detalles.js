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

      <TouchableOpacity style={styles.Contenedor} onPress={() => this.props.Ruta}>
        <Image source={this.props.Imagen} style={styles.icono} resizeMode='center' />
      </TouchableOpacity>

    )
  }
};


const styles = StyleSheet.create({

  icono: {
    height: Iconos.BTN_INF_DETALLES,
    width: '100%',
    marginTop: '0%',
  },

  Contenedor: {

    width: width,
    height: '10%',
    marginTop: '-0%',
    position: 'absolute',
    marginLeft: '0%',
    //marginRight: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'red',

  },


});