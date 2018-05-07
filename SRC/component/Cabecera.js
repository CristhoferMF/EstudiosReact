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
  Alert,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal"
import ModalDetalle from './detalle/ModalDetalle'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Cabecera extends Component<Props> {
  constructor(props){
    super(props);
      this.state = {
        isVisible: false,
      }
  }
  
  cerrarmodal(){
    this.setState({isVisible:false});
  }

  render() {
    const propiedades={
        prop:this.state.isVisible,
        esto:this,
    }
    return (
      <View style={styles.cabecera}>
      <ModalDetalle propiedades={propiedades}/>

      { this.props.datos.back==true && <TouchableNativeFeedback onPress={() => this.props.datos.atras.atras()}>
      <View>
      <Icon name="md-arrow-back" size={25}  color="white" style={{padding: 16,paddingRight: 20,}}/>
      </View>
      </TouchableNativeFeedback>}
        { this.props.datos.back==true && <Text style={styles.texto}>{this.props.datos.nombre}</Text> }
        { this.props.datos.back!=true && <Text style={styles.texto2}>{this.props.datos.nombre}</Text> }
      { this.props.datos.back==true && <TouchableNativeFeedback onPress={() => { this.setState({isVisible:true})}}>
      <View>
      <Icon name="md-add" size={25}  color="white" style={{padding: 16,paddingRight: 20,}}/>
      </View>
      </TouchableNativeFeedback>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecera: {
    height: 57,
    flexDirection: 'row',
    backgroundColor: '#FF5722',
    elevation: 4,
    alignItems: 'center',
  },texto:{
    color: '#ffff',
    fontWeight:  '500',
    fontFamily: 'IBMRegular',
    fontSize: 23,
    flex: 1
  },texto2:{
    color: '#ffff',
    fontWeight:  '500',
    fontFamily: 'IBMRegular',
    fontSize: 23,
    paddingLeft: 20,
    flex: 1
  },bottomModal: {
    justifyContent: "flex-end",
    margin: 0
},

});
