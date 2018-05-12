/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  RefreshControl,
  ToastAndroid,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
  Text,
  ActivityIndicator
} from 'react-native';

import EstudiantesDetalle from '../component/detalle/EstudiantesDetalle'
import Cabecera from '../component/Cabecera'
import {getDetalleEstudiantes} from '../API/ListaDetalle'
import Icon from 'react-native-vector-icons/Ionicons'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = this.props.navigation.state.params;
    this.state.refreshing=false;
    this.state.error=false;
    this.state.listadetalles=null;
  }
  
  actualizar(){
    return getDetalleEstudiantes(this.state.id)
    .then((data) => this.setState({listadetalles:data}))
    .then(() => {
      this.setState({refreshing:false,error:false})})
  }
  componentDidMount(){
      this.actualizar().catch((error) => { 
      this.setState({error:true,refreshing:false})
    });
  }

  _onRefresh(){
    this.setState({refreshing:true});
    this.actualizar()
    .then(() => {ToastAndroid.show('Contenido actualizado', ToastAndroid.SHORT);})
    .catch((error) => { 
      this.setState({error:true,refreshing:false})
      ToastAndroid.show('Sin conexion', ToastAndroid.SHORT);
    });
  }
  
  obtenernombre(){
    return this.state.nombre+' '+this.state.apellidos;
  }
  
  static navigationOptions = {
    header: null,
  }
  reconectar(){
      this.setState({listadetalles:null,error:false});
      return getDetalleEstudiantes(this.state.id)
    .then((data) => this.setState({listadetalles:data})).then(() => {
      this.setState({error:false})
      ToastAndroid.show('Conexion retomada', ToastAndroid.SHORT);
    }).catch((error) => { 
      this.setState({error:true})
      ToastAndroid.show('Sin conexion', ToastAndroid.SHORT);
    });
  }
  atras = () =>{
      this.props.navigation.goBack()
  }
  render() {

    const error = <TouchableNativeFeedback onPress={() => this.reconectar()}>
                  <View style={styles.error}>
                    <Icon name='ios-sad' size={80}/>
                    <Text style={styles.errorText}>No se puede conectar</Text>
                    <View style={{flexDirection: 'row' }}>
                    <Text style={{fontSize: 12}}>Toca para reintentar</Text>
                    <Icon name='ios-refresh' size={15} style={styles.errorIcon}/>
                    </View>
                  </View>
                  </TouchableNativeFeedback>;

    const listadetalles=this.state.listadetalles;
    const datos={
      nombre:this.obtenernombre(),
      id:this.state.id,
      back:true,
      atras:this,
    }
    return (
      <View style={styles.container}>
        <Cabecera datos={datos}/>
        <ScrollView refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)} />
          }>
          {this.state.error==false  && !listadetalles && <View style={styles.loaderCont}><ActivityIndicator style={styles.indicator} size={50}/></View>}
          {this.state.error==true && error }
        {this.state.error==false && listadetalles && <EstudiantesDetalle listadetalles={listadetalles} />}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll:{
    paddingVertical: 10,
  },
  loaderCont:{
    flexDirection: 'column',
    justifyContent:  'center',
    alignItems: 'center',
    height: '100%',
  },
  error:{
    flexDirection: 'column',
    justifyContent:  'center',
    alignItems: 'center',
    height:600,
    backgroundColor:'#ffff'
  },
  errorText:{
    fontWeight: 'bold' 
  },
  errorIcon:{
    paddingLeft: 5
  },
  indicator:{
    marginVertical: '50%'
  },
});
