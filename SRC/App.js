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
  TouchableNativeFeedback
} from 'react-native';
import Principal from './route/Principal'
import Detalle from './route/Detalle'
import { StackNavigator } from 'react-navigation';

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
        <RootStack/>
    );
  }
}

const RootStack = StackNavigator(
  {
    Principal: {
      screen: Principal,
    },
    Detalle: {
      screen: Detalle,
    },
  },
  {
    initialRouteName: 'Principal',
    header: null
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll:{
    paddingVertical: 10,
  }
});
