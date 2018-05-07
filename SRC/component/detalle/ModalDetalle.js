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
      isModal: props.propiedades
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.propiedades !== this.props.propiedades){
        this.setState({isModal:newProps.propiedades})
    }
  }
  render() {
    
    return (
    
      <View style={styles.cabecera}>

      <Modal
        style={styles.bottomModal}
        isVisible={this.state.isModal}
        animationInTiming={200}
        onSwipe={() => this.setState({isModal:false}) }
        onBackButtonPress={() => this.setState({isModal:false}) }
        onBackdropPress={() => this.setState({isModal:false}) }
        backdropOpacity={0.6}
        swipeDirection="down"
      >
        <View style={{ backgroundColor: 'white',height: 250}}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecera: {
    height: 57,
    flexDirection: 'row',
    backgroundColor: '#FF5722',
    elevation: 4,
    alignItems: 'center',
  },texto:{
    color: '#ffff',
    fontWeight:  '500',
    fontFamily: 'IBMRegular',
    fontSize: 23,
    flex: 1
  },texto2:{
    color: '#ffff',
    fontWeight:  '500',
    fontFamily: 'IBMRegular',
    fontSize: 23,
    paddingLeft: 20,
    flex: 1
  },bottomModal: {
    justifyContent: "flex-end",
    margin: 0
},

});
