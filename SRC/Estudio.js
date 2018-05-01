/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Estudio extends Component<Props> {


  render() {
     const { id,nombre,apellidos,edad,publicacion,ufecha,ucapitulo,uparrafo} = this.props.listestudiante;
    return (
        <View style={styles.caja}>
          <View style={styles.titulo}>
            <Text style={styles.nombres}>{nombre} {apellidos}</Text>
            <View style={styles.edadContainer}>
              <Text style={styles.edad}>{edad} años</Text>
            </View>
          </View>
          <View style={{borderBottomColor: 'lightgray',borderBottomWidth: 1,marginVertical:7,}}/>
          <View style={styles.informacion}>
            <Text style={styles.campo}>Última visita: </Text>
            <Text style={styles.campoI}>{ufecha}</Text>
          </View>
          <View style={styles.informacion}>
            <View style={styles.row}>
              <Text style={styles.campo}>Publicación: </Text>
              <Text style={styles.campoI}>{publicacion}</Text>
            </View>
            <View style={styles.row2}>
              <Text style={styles.campo}>Cap: </Text>
              <Text style={styles.campoI}>{ucapitulo}-{uparrafo}</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  caja: {
    backgroundColor:'white',
    paddingVertical:10,
    paddingHorizontal:15,
    marginHorizontal:10,
    marginVertical: 5
  },
  titulo:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  nombres: {
    textAlign: 'left',
    color: '#333333',
    fontSize:30,
    fontFamily:'IBMExtraLight'
  },edadContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },edad:{
    fontFamily:'IBMLight',
    fontSize:16
  },informacion:{
    flexDirection:'row',
    alignItems:'center',
  },campo:{
    fontFamily:'IBMLight',
    fontWeight:'600',
    fontSize:16,
    padding:3
  },campoI:{
    fontFamily:'IBMLight',
    fontSize:16,
    padding:3,
    maxWidth:150
  },row:{
    flexDirection:'row',
    justifyContent:'center',
  },row2:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
  }
});
