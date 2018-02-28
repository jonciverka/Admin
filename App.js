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
import {StackNavigator} from 'react-navigation'
import login from './android/Componentes/login'
import index from './android/Componentes/index'
import unidad1 from './android/Componentes/Unidades/Unidad1/Unidad1'

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}


const RootStack = StackNavigator ({
  login:{
    screen: login
  },
  index:{
    screen:index
  },
  unidad1:{
    screen:unidad1
  },
},{
  navigationOptions : {
    header:null
  }
});