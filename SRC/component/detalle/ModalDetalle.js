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
  Alert,
  Button,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ModalDetalle extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isModal: props.propiedades.prop
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.propiedades !== this.props.propiedades){
        this.setState({isModal:newProps.propiedades.prop})
    }
  }
  render() {
    
    return (
    
      <View style={styles.cabecera}>

      <Modal
        style={styles.bottomModal}
        isVisible={this.state.isModal}
        animationInTiming={200}
        onSwipe={() => this.props.propiedades.esto.cerrarmodal() }
        onBackButtonPress={() => this.props.propiedades.esto.cerrarmodal() }
        onBackdropPress={() => this.props.propiedades.esto.cerrarmodal() }
        backdropOpacity={0.6}
        swipeDirection="down"
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>Agregar visita</Text>
            <TextInput style={styles.input} placeholder="Capitulo (1,2,3,..)"
            keyboardType="numeric"
            returnKeyType="next"
            blurOnSubmit={ false }
            onSubmitEditing={() => {this.nextInput.focus()}}/>
            <TextInput style={styles.input} placeholder="Parrafo Final (1,2,3,..)"
            keyboardType="numeric"
            returnKeyType="done"
            blurOnSubmit={ false }
            ref={nextInput => this.nextInput = nextInput}/>
            <TouchableNativeFeedback>
            <View style={styles.boton}>
            <Text style={styles.labelboton}>AGREGAR</Text>
            </View>
            </TouchableNativeFeedback>
        </View>
      </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
},container:{
  backgroundColor: 'white',
  width:'100%',
  flexDirection:'column',
  height: 250
},titulo:{
  paddingHorizontal:18,
  fontSize:18,
  fontWeight:'400',
  color:'black',
  paddingTop:20
},input:{
  width:'93%',
  alignSelf :'center',
  fontFamily :'IBMLight',
  paddingLeft:10
},boton:{
  width:80,
  justifyContent:'center',
  alignContent:'center',
  alignSelf:'flex-end',
  padding:5,
  marginRight:10,
  marginTop:10

},labelboton:{
  color:'#FF5722',
  fontFamily :'IBMRegular',
}

});
