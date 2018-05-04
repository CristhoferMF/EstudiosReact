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
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

import EstudioDetalle from './EstudioDetalle'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class EstudiantesDetalle extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.listadetalles),
    };
  }
  
  componentWillReceiveProps(newProps){
    if(newProps.listadetalles !== this.props.listadetalles){
       this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.listadetalles)
      })
    }
  }


  render() {
    return (
      <ListView style={styles.scroll}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(listadetalle) => {
          return (
            <EstudioDetalle listadetalle={listadetalle}/>
            )}
          }
      />
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
