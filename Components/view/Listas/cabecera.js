import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";

//Rutas de app
import { Actions } from 'react-native-router-flux';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Iconos
import Menu from '../../../assets/Images/ICO_menu_1.png';
import Logo from '../../../assets/Images/logo.png';
import Buscar from '../../../assets/Images/ICO_buscar.png';

//Componentes
import Boton from '../../util/BTN-navegacion';
import Logo_I from '../../util/LOGO-inicio';
import Texto from '../../util/FECHA-inicio';

export default class ListasScreen extends React.Component {

  render() {
    return (

      <View style={styles.Contenedor}>

        <View style={styles.C1}>
          <Boton
            Imagen={Menu}
          />

          <Logo_I
          Imagen={Logo}
          />
          
          <Boton
            Imagen={Buscar}
          />
        </View>


        <View style={styles.C2}>
          <Texto />
        </View>

      </View>

    )
  }
};


const styles = StyleSheet.create({

  Contenedor: {
    //flex: 1,
    flexDirection: 'column',
    height: '20%',
    width: width,
    //backgroundColor: 'black',

  },

  C1: {

    flexDirection: 'row',
    height: '50%',
    width: width,
    //backgroundColor: 'red',
    justifyContent: 'space-between'

  },

  C2: {

    height: '50%',
    width: width,
    //backgroundColor: 'blue',
    justifyContent: 'center',

  },
});
