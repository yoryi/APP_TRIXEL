import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';

//dimensiones
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//icono
import Icono from '../assets/Images/ICON_menu_4.png';

//componentes
import Cabecera from '../Components/view/Detalles/cabecera';
import Cuerpo from '../Components/view/Detalles/cuerpo';
import Slider from '../Components/util/SLIDER-Detalles';
import Btn from '../Components/util/BTN-inferior-detalles';


export default class DetallesScreen extends React.Component {
  render() {
    return (
      <View style={styles.fondo}>
        
        
        <ScrollView showsVerticalScrollIndicator={false}>

          <Slider
            portada={this.props.portada}
          />

          <Cuerpo
            portada={this.props.portada}
            titulo={this.props.titulo}
            creador={this.props.creador}
            puntaje={this.props.puntaje}
            genero={this.props.genero}
            descripcion={this.props.descripcion}
          />


        </ScrollView>
        
        <Cabecera />

        <View style={{backgroundcolor: 'blue', justifyContent: 'center', marginBottom: '-10%',}}>
        <Btn
          Imagen={Icono}
        />
        </View>



      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  fondo: {
    //flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-evenly',
    //alignItems: 'center',
    width: width,
    height: height,
    //position: 'absolute',
    backgroundColor: 'white',
    marginBottom: '0%',
  },

});