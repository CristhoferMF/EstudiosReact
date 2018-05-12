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
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal";
import {addSesiones} from '../../API/insertSesiones'
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
      id:props.propiedades.codigo,
      fechaletra: "Escoger fecha",
      fecha:null,
      capitulo:"",
      parrafo:"",
      observacion:"Ninguna"
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
    const fechan=ano+"-"+mes+"-"+dia;
    //console.warn('A date has been picked: ', date );
    this.setState({fechaletra:this.fechaletra(date)});
    this.setState({fecha:fechan});
    this._hideDateTimePicker();
  };

  componentWillReceiveProps(newProps){
    if(newProps.propiedades !== this.props.propiedades){
        this.setState({isModal:newProps.propiedades.prop})
    }
  }
  cerrarModal(){
    this.props.propiedades.esto.cerrarmodal();
    this.limpiarform();
  }
  limpiarform(){
    this.setState({fechaletra:"Escoger fecha"});
    this.setState({capitulo:""});
    this.setState({parrafo:""});
    this.setState({observacion:""});
  }
  buttonsend(){
    Alert.alert(
  'Agregar',
  'Se agregará la visita al registro',
  [
    {text: 'Cancelar', onPress: () => {}},
    {text: 'OK', onPress: () => this.enviarForm()},
  ],
  { cancelable: false }
)
  }
  enviarForm(){
    if(this.state.id != "" &&
      this.state.fecha != null &&
      this.state.capitulo != "" &&
      this.state.parrafo != "" &&
      this.state.observacion != "" ){

        addSesiones(this.state.id,
      this.state.fecha,
      this.state.capitulo,
      this.state.parrafo,
      this.state.observacion)
    .then( (data) => {
      if(data.result =="TRUE"){
        ToastAndroid.show('Se agrego la visita', ToastAndroid.SHORT);
        this.props.propiedades.detalleprincipal._onRefresh();
        this.limpiarform();
      }else{
        ToastAndroid.show('Hubo un error, Asegurese de ingresar datos correctos', ToastAndroid.SHORT)
      }
    })
    .catch((error) => ToastAndroid.show('Error en el servidor '+error, ToastAndroid.SHORT));
  
    }else{
      ToastAndroid.show('Llene todos los campos', ToastAndroid.SHORT);
    }
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
          <ScrollView>
      <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.fecha}>{this.state.fechaletra}</Text>
        </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Capitulo (1,2,3,..)"
            keyboardType="numeric"
            returnKeyType="next"
            blurOnSubmit={ false }
            value={this.state.capitulo}
            onChangeText={(val)=>  this.setState({capitulo:val})}
            onSubmitEditing={() => {this.parrafoInput.focus()}}/>
            <TextInput style={styles.input} placeholder="Parrafo Final (1,2,3,..)"
            keyboardType="numeric"
            returnKeyType="next"
            blurOnSubmit={ false }
            value={this.state.parrafo}
            ref={input => this.parrafoInput = input}
            onChangeText={(val)=>  this.setState({parrafo:val})}
            onSubmitEditing={() => {this.observacionInput.focus()}}/>
            <TextInput
              ref={input => this.observacionInput = input}
              style={styles.input2}
              returnKeyType="done"
              blurOnSubmit={ false }
              value={this.state.observacion}
              onChangeText={(val)=>  this.setState({observacion:val})}
              placeholder="Observación"
            />
            <TouchableNativeFeedback onPress={() => this.buttonsend()}>
            <View style={styles.boton}>
            <Text style={styles.labelboton}>AGREGAR</Text>
            </View>
            </TouchableNativeFeedback>
            </ScrollView>
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
  height: 310
},titulo:{
  paddingHorizontal:15,
  paddingBottom:15,
  fontSize:18,
  fontWeight:'400',
  color:'white',
  paddingTop:15,
  backgroundColor:'#FF5722',
  fontWeight:'500'
},input:{
  width:'93%',
  alignSelf :'center',
  fontFamily :'IBMLight',
  paddingLeft:10,
},input2:{
  width:'93%',
  alignSelf :'center',
  fontFamily :'IBMLight',
  paddingLeft:10,
},boton:{
  width:80,
  justifyContent:'center',
  alignContent:'center',
  alignSelf:'flex-end',
  padding:5,
  marginRight:10,
  marginVertical:10
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
  marginTop:10,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
} 

});
