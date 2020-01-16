import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";

//Rutas de app
import { Actions } from 'react-native-router-flux';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Iconos
import Atras from '../../../assets/Images/ICO_atras.png';
import Link from '../../../assets/Images/ICO_link.png';

//Componentes
import Boton from '../../util/BTN-navegacion';

export default class DetallesScreen extends React.Component {

  render() {
    return (

      <View style={styles.Contenedor}>

        <Boton
          Imagen={Atras}
          Ruta={() => Actions.Listas()}
        />

        <Boton
          Imagen={Link}

        />

      </View>

    )
  }
};


const styles = StyleSheet.create({

  Contenedor: {
    flexDirection: 'row',
    height: '12%',
    width: width,
    //backgroundColor: 'black',
    justifyContent: 'space-between',
    position: 'absolute'
  },


});
