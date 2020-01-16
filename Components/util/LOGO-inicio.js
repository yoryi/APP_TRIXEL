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


export default class LogoScreen extends React.Component {
  render() {
    return (

      <View style={styles.Boton}>
        <Image source={this.props.Imagen}  resizeMode='center' style={styles.icono} />
      </View>

    )
  }
};


const styles = StyleSheet.create({

  icono: {
    height: Iconos.MENU_LOGO,
    width: Iconos.MENU_LOGO,
  },

  Boton: {
    width: '0%',
    height: ' 10%',
    paddingTop: '8%',
    paddingLeft: '0%',
    paddingRight: '0%',
  },

  

});
