import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { Dimensions } from "react-native";

import { BlurView } from 'expo-blur';

//Constantes
import Color from '../../Constants/Colores';
import Vista from '../../Constants/Vistas';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Iconos
import Trazado from '../../assets/Images/trazado.png';
import Play from '../../assets/Images/Play.png';


export default class SliderScreen extends React.Component {

  render() {
    return (
      <View style={styles.Contenedor}>

        <Image source={{ uri: this.props.portada }} resizeMode='cover' style={styles.Foto} />
        <View style={styles.sombra}>
        </View>

        <View style={styles.Cont_trazado}>
          <Image source={Trazado} resizeMode='cover' style={styles.Imagen_Trazado}/>
        </View>

        <TouchableOpacity style={styles.Touch_Play}>
          <Image source={Play} resizeMode='contain' style={styles.Imagen_Play}/>
        </TouchableOpacity>
        

      </View>

    )
  }
};

const styles = StyleSheet.create({

  Contenedor: {
    //flex: 1,
    flexDirection: 'column',
    height: Vista.P_altura,
    width: '100%',
    backgroundColor: Color.APP_Fondo,
    //justifyContent: 'space-between',

    opacity: 1

  },

  Imagen_Trazado:{
    width: '100%', 
    height: '35%', 
  },

  Imagen_Play:{
    width: '15%', 
    height: '15%',
  },

  subcontenedor: {

    height: '65%',
    width: '100%',
    backgroundColor: 'red',
    //justifyContent: 'space-between',

  },

  subcontenedor2: {

    height: '60%',
    width: '100%',
    //backgroundColor: 'yellow',
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5%',

  },

  Foto: {
    width: '100%',
    height: '100%',
    borderRadius: 0
  },

  Cont_trazado: {
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    marginBottom: '-6%',
  },

  Touch_Play: {

    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginTop: '25%' 

  },

  sombra:{
    backgroundColor: 'black', 
    opacity: 0.5, 
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    justifyContent: 'center'
  }

});
