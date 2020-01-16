import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Dimensions } from "react-native";

//calificaciones
import { Rating } from 'react-native-elements';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Constantes
import Iconos from '../../Constants/Iconos';
import Vista from '../../Constants/Vistas';
import Texto from '../../Constants/Textos';
import Color from '../../Constants/Colores';

//Iconos
import Menu from '../../assets/Images/ICON_menu_2.png';
import ICONO from '../../assets/Images/ICON_1.png';

export default class TargetaScreen extends React.Component {
  render() {

    return (
      <View style={styles.contenedor}>

        <View style={styles.cont1}>
          <View style={{ paddingLeft: '17%', paddingTop: '0%' }}>
            <View style={styles.cont_titilo}>
              <Text style={styles.Texto_titulo}>{this.props.titulo}</Text>
            </View>

            <Text style={styles.Texto_creador}>by {this.props.creador}</Text>

            <View style={styles.cont_raiting}>
              <Rating type='custom' ratingColor='#00B9FF'
                ratingBackgroundColor='#DEF6FF'
                imageSize={Iconos.Estrellas} ratingCount={5}
                startingValue={this.props.puntaje}
              />
            </View>

            <View style={{ width: '75%', height: '30%', }}>
              <Text style={styles.Texto_genero}>{this.props.genero}</Text>
            </View>
          </View>
        </View>



        <View style={styles.cont2}>
          <Image source={{ uri: this.props.portada }} resizeMode='stretch' style={styles.Foto} />
          <View style={{ height: '25%', justifyContent: 'center' }}>
            <Text style={styles.Texto_fecha}>in {this.props.hora}h {this.props.minutos}m</Text>
          </View>
        </View>

        
        <View style={styles.cont3}>

          <View style={styles.cont_menu}>
            <TouchableOpacity style={styles.Touch_menu}>
              <Image source={Menu} resizeMode='cover' style={styles.menu} />
            </TouchableOpacity>
          </View>

          <View style={styles.cont_entrar}>
            <TouchableOpacity onPress={this.props.boton} style={styles.Touch_entrar}>
              <Image source={ICONO} resizeMode='stretch' style={styles.icono} />
            </TouchableOpacity>
          </View>
        </View>

      </View>

    )
  }
};


const styles = StyleSheet.create({

  contenedor: {

    flexDirection: 'row',
    height: Vista.T_altura,
    //backgroundColor: 'white',
    margin: 4,
  },

  cont1: {
    marginTop: '4%',
    backgroundColor: 'white',
    height: '85%',
    width: '67%',
    borderRadius: 9,
    position: 'absolute',
    marginLeft: '23%',
    //paddingRight: '5%',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3, },
    shadowColor: '#B1B1B1'

  },

  cont2: {
    backgroundColor: 'white',
    height: '75%',
    width: '27%',
    borderRadius: 10,
    marginLeft: '3%',
    shadowOpacity: 0.9,
    shadowOffset: { width: 1, height: 4, },
    shadowColor: '#B1B1B1'
    //position: 'absolute'
    //borderRadius: 15, 

  },

  cont3: {

    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'column'

  },

  Foto: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },

  menu: {
    width: Iconos.BTN_MENU_TARGETA,
    height: Iconos.BTN_MENU_TARGETA,
  },

  menu: {
    width: Iconos.BTN_MENU_TARGETA,
    height: Iconos.BTN_MENU_TARGETA,
  },

  icono: {
    height: '100%',
    width: '100%',
  },

  Boton: {
    paddingTop: '0%',
    paddingLeft: '0%',
    paddingRight: '0%',
    position: 'absolute'
  },

  Texto_titulo: {

    fontSize: Texto.Principal,
    color: Color.Principal

  },

  Texto_creador: {
    fontSize: 14, marginTop: '-6%',
    color: Color.segundario,
    fontSize: Texto.Segundario,

  },

  Texto_genero: {
    fontSize: 14,
    marginTop: '12%',
    fontWeight: 'bold',
    color: Color.Principal,
    fontSize: Texto.Segundario

  },

  Texto_fecha: {

    fontSize: Texto.Segundario,
    marginLeft: '8%',
    color: Color.segundario,

  },

  cont_titilo: {

    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
    height: '30%',
    marginTop: '4%'

  },

  cont_raiting: {

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '7%'

  },

  cont_menu: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    marginTop: '5.5%',
    marginLeft: '-2.0%'
  },

  cont_entrar: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    marginTop: '-28%',
    marginLeft: '-2%'
  },


  Touch_menu: {
    width: '20%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  Touch_entrar: {
    width: '20%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    marginTop: '-0%'
  },


});