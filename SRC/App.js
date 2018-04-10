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
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';
import Estudio from './Estudio'
import Cabecera from './Cabecera'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <View style={styles.container}>
        <Cabecera/>
        <ScrollView>
          <Estudio/>
          <Estudio/>
          <Estudio/>
          <Estudio/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
