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
  Text,
  TouchableNativeFeedback
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
  state = {
      listestudiantes:[]
  }
  componentDidMount(){
      getEstudiantes()
    .then((data) => this.setState({listestudiantes:data}))
  }
  mover = (pagina,data) =>{
      this.props.navigation.navigate(pagina,data);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const listestudiantes=this.state.listestudiantes;
    return (
      <View style={styles.container}>
      <Cabecera datos={'Mis estudios'}/>
        <Estudiantes listestudiantes={listestudiantes} action={this} />
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
