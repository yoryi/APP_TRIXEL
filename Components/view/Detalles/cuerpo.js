import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, } from 'react-native';
import { Dimensions } from "react-native";

//calificaciones
import { Rating } from 'react-native-elements';

//Constantes
import Iconos from '../../../Constants/Iconos';
import colores from '../../../Constants/Colores';

//Constantes
import Color from '../../../Constants/Colores';
import Texto from '../../../Constants/Textos';
import Vista from '../../../Constants/Vistas';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class DetallesScreen extends React.Component {

  render() {
    return (
      <View style={styles.Contenedor}>

        <View style={styles.CP}>

          <View style={styles.CP1}>
            <View style={styles.SC1_1}>
              <View style={styles.S_PORTADA}>
                <Image source={{ uri: this.props.portada }} resizeMode='stretch' style={styles.Foto} />
              </View>
            </View>


            <View style={styles.SC1_2}>

              <View style={styles.Espacio_1}>
                <View style={styles.Espacio_2}>
                  <Text style={styles.Texto_titulo}>{this.props.titulo}</Text>
                  <Text style={styles.Texto_creador}>{this.props.creador}</Text>
                </View>
                
              </View>

              <View style={styles.raiking}>
                <Rating type='custom' ratingColor='#00B9FF'
                  ratingBackgroundColor='#DEF6FF'

                  imageSize={Iconos.Estrellas} ratingCount={5}
                  startingValue={this.props.puntaje}
                  showRating
                  style={{ flexDirection: 'row-reverse', alignItems: 'baseline', }}
                />
              </View>
            </View>
          </View>


          <View style={styles.CP2}>
            <View style={styles.SC2_1}>

              <View style={{ width: '100%' }}>
                <Text style={styles.Texto_genero}>{this.props.genero}</Text>
              </View>

              <View style={{ marginTop: '3%', width: '100%', height: '100%' }} >
                <Text style={styles.Texto_Descripcion}>{this.props.descripcion}</Text>
              </View>

            </View>

          </View>

          <View style={styles.CP3}>
            <View style={styles.SC3_1}>

              <View style={styles.SC3_2}>
                <View style={{ justifyContent: 'center', width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.Texto_dia}>Today </Text>
                  <Text style={styles.Texto_hora}>3:00PM</Text>
                </View>

              </View>

            </View>
          </View>
        </View>
      </View>

    )
  }
};

const styles = StyleSheet.create({

  //CP: contenedor principal
  //SC1_1 sub contenedores 1 , SC2_2 sub contenedor diferente

  Contenedor: {
    //flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Color.APP_Fondo,
    paddingLeft: '3%',
    paddingRight: '3%',
  },

  CP: {
    width: '100%',
    height: 600,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: '-65%'

  },

  CP1: {
    flexDirection: 'row',
    height: '40%'

  },

  CP2: {
    flexDirection: 'row',
    height: '60%',
    //backgroundColor: 'trasnparent'
  },

  CP3: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'column'
  },


  SC1_1: {
    width: '45%',
    height: '100%',
    marginTop: '4%'

  },

  SC1_2: {
    width: '55%',
    height: '100%',
    paddingLeft: '3%',
    backgroundColor: 'transparent'
  },


  SC2_1: {
    marginTop: '-15%',
    paddingLeft: '3%',
    paddingRight: '3%',
    height: '100%',
    width: '100%'
  },

  SC3_1: {
    width: '100%',
    height: '50%',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  SC3_2: {
    width: '42%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: '3%',
    marginTop: '-12%',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 9, },
    shadowColor: '#B1B1B1'
  },

  S_PORTADA: {

    paddingLeft: '7%',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0, },
    shadowColor: '#B1B1B1'

  },

  Texto_titulo: {
    fontSize: Texto.Fecha_Principal,
    fontWeight: 'bold',
    color: colores.Principal
  },

  Texto_creador: {
    fontSize: Texto.D_Segundario,
    marginTop: '3%',
    color: colores.segundario
  },

  Texto_genero: {
    fontSize: Texto.D_genero,
    fontWeight: 'bold',
    color: colores.Principal
  },

  Texto_Descripcion: {
    fontSize: Texto.D_Descripcion,
    textAlign: 'left',
    color: colores.segundario
  },

  Texto_dia: {
    fontSize: Texto.D_F1,
    color: colores.segundario
  },

  Texto_hora: {
    fontSize: Texto.D_F2,
    fontWeight: 'bold',
    color: colores.Principal
  },

  Espacio_1: {
    marginTop: '8%',
  },

  Espacio_2: {
    height: '40%',
    width: '80%',
    marginTop: '5%'

  },

  raiking: {

    marginTop: '0%',
    alignItems: 'flex-start',

  },

  subcontenedor: {

    height: '50%',
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
    width: '94%',
    height: '100%',
    borderRadius: 10,
    marginTop: '-40%',

  },

});
