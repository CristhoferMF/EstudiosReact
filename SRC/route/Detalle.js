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
} from 'react-native';

import Estudiantes from '../Estudiantes'
import Cabecera from '../Cabecera'
import {getEstudiantes} from '../API/Lista'

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
  }
  obtenernombre(){
    return this.state.nombre+' '+this.state.apellidos;
  }
  
  static navigationOptions = {
    header: null,
  }

  render() {
    console.warn(this.state)
    return (
      <View style={styles.container}>
        <Cabecera datos={this.obtenernombre()}/>
        
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
  }
});
