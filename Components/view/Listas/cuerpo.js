import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';

//Dimensiones del dispositivo
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Componentes
import Targeta from '../../util/TARGETA-inicio';
import Boton from '../../util/BTN-inferior-inicio';
import API from '../../../api/api';

//consumo de api
var Api = API.api;

//icono
import icono from '../../../assets/Images/ICON_menu_3.png';


export default class ListasScreen extends React.Component {

  constructor(props) {
    super(props);
    //estados
    this.state = { isLoading: true, text: '' };
    this.data = [];
  }

  componentDidMount() {
    return fetch(Api)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState(
          {
            isLoading: false,
            data: responseJson,
          },
          function () {
            this.data = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      //indicador de carga de flatlist
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.Contenedor}>

        <FlatList showsVerticalScrollIndicator={false} style={styles.flatlist}
          enableEmptySections={true}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>

            <Targeta
              portada={item.portada}
              titulo={item.titulo}
              creador={item.creador}
              puntaje={item.puntaje}
              genero={item.genero}
              hora={item.hora}
              minutos={item.minutos}
              boton={() => Actions.Detalles({
                portada: item.portada,
                titulo: item.titulo,
                creador: item.creador,
                puntaje: item.puntaje,
                genero: item.genero,
                descripcion: item.descripcion,
              })}
            />

          }
        />

        <Boton
          Imagen={icono}
        />

      </View>
    )
  }
};


const styles = StyleSheet.create({

  Contenedor: {
    flexDirection: 'column',
    height: '80%',
    width: width,
    //backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  SC: {

    height: '100%',
    width: '100%',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    position: 'relative',
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    //paddingLeft: '5%',

  },

  C1: {

    height: '90%',
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',

  },

  flatlist: {
    paddingTop: '3%',
    width: '100%',
    height: '80%',
    marginBottom: 0,
    backgroundColor: 'transparent',
    paddingLeft: '3%',
    paddingRight: '3%',

  },


});
