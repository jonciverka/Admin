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
  View
} from 'react-native';
import Wordpress from 'react-native-wordpress'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Administracion extends Component {
  static navigationOptions={
    header: null,
}

  render() {
    let strings={
      categories:"Categories", 
      pages:"Pages", 
      searchText:"Write anything for search", 
      homepage:"Home", 
      warningText:"Ops someting is wrong", 
      nowordpressText:"Your address may not be a Wordpress site", 
      noexternalUseText:"Your address is Wordpress site but not accepted external use",  tryanother:"TRY ANOTHER"
      };
     
    return (
      <Wordpress url={"http://mundosud.com/"} 
       
      strings={strings} />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
