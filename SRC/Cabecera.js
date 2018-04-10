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
export default class Cabecera extends Component<Props> {
  
  render() {
    return (
      <View style={styles.cabecera}>
        <Text style={styles.texto}>Mis estudios</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecera: {
    height: 57,
    backgroundColor: '#FF5722',
    elevation: 3,
    justifyContent: 'center',
  },texto:{
    marginLeft: 20,
    color: '#ffff',
    fontFamily: 'IBMRegular',
    fontSize: 23
  }

});
