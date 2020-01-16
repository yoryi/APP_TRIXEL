import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";

//Constantes
import Texto from '../../Constants/Textos';
import Color from '../../Constants/Colores';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class InicioScreen extends React.Component {
  render() {
    return (

      <View style={styles.Contenedor}>
        <Text style={{ fontSize: Texto.Fecha_Principal, color: Color.Fecha_principal, fontWeight: 'bold' }}>Today</Text>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', alignItems: 'center', marginTop: '0%' }}>
          <Text style={{ fontSize: Texto.Fecha_Segundaria, color: Color.Fecha_Segundaria, paddingLeft: '13%', }}>Mar 26</Text>
          <Text style={{ fontSize: Texto.Fecha_Segundaria, color: Color.Fecha_Segundaria, paddingLeft: '10%' }}>Mar 27</Text>
          <Text style={{ fontSize: Texto.Fecha_Segundaria, color: Color.Fecha_Segundaria, paddingLeft: '10%' }}>Mar 28</Text>
        </View>
      </View>

    )
  }
};

const styles = StyleSheet.create({

  Contenedor: {

    //backgroundColor: 'blue',
    justifyContent: 'flex-start',
    paddingLeft: '4%',
    paddingRight: '4%',
    flexDirection: 'row',

  },

});
