import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

//dimensiones
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//componentes
import Cabecera from '../Components/view/Listas/cabecera';
import Cuerpo from '../Components/view/Listas/cuerpo';


export default class ListaScreen extends React.Component {
  render() {
    return (
      <ImageBackground resizeMode={"cover"} source={require('../assets/Images/BG.png')} style={styles.fondo}>

        <Cabecera />
        <Cuerpo />

      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({

  fondo: {
    flex: 1,
    width: width,
    height: height,
    //position: 'absolute',
    backgroundColor: 'white'
  },

});