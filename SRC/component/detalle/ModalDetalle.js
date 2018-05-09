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
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal";
import DateTimePicker from 'react-native-modal-datetime-picker';

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
      isModal: props.propiedades.prop,
      isDateTimePickerVisible: false,
      fechaEscogida: "Escoger fecha"
    }
  }

  fechaletra(f){
    const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    //let dia=f.getDate()+1;
    const fecha=(f.getDate()) + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    return fecha;
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dia=date.getDate();
    let mes=date.getMonth()+1;
    let ano=date.getFullYear();
    //console.warn('A date has been picked: ', date );
    this.setState({fechaEscogida:this.fechaletra(date)});
    this._hideDateTimePicker();
  };

  componentWillReceiveProps(newProps){
    if(newProps.propiedades !== this.props.propiedades){
        this.setState({isModal:newProps.propiedades.prop})
    }
  }
  cerrarModal(){
    this.props.propiedades.esto.cerrarmodal();
    this.setState({fechaEscogida:"Escoger fecha"});
  }
  render() {
    
    return (
    
      <View style={styles.cabecera}>

<View style={{ flex: 1 }}>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
</View>

      <Modal
        style={styles.bottomModal}
        isVisible={this.state.isModal}
        animationInTiming={200}
        onSwipe={() => this.cerrarModal() }
        onBackButtonPress={() => this.cerrarModal() }
        onBackdropPress={() => this.cerrarModal() }
        backdropOpacity={0.6}
        swipeDirection="down"
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>Agregar visita</Text>
      <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.fecha}>{this.state.fechaEscogida}</Text>
        </TouchableOpacity>
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
            <TouchableNativeFeedback onPress={() => console.warn('Listo')}>
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
  height: 255
},titulo:{
  paddingHorizontal:18,
  paddingBottom:15,
  fontSize:18,
  fontWeight:'400',
  color:'white',
  paddingTop:15,
  backgroundColor:'#FF5722',
  elevation:2,
  fontWeight:'500'
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
},fecha:{
  width:'93%',
  alignSelf :'center',
  fontFamily :'IBMLight',
  textAlign:'center',
  paddingVertical:10,
  fontSize:16,
} 

});
