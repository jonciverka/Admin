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
import unidad2 from './android/Componentes/Unidades/Unidad2/Unidad2'
import unidad3 from './android/Componentes/Unidades/Unidad3/Unidad3'
import unidad4 from './android/Componentes/Unidades/Unidad4/Unidad4'
import unidad5 from './android/Componentes/Unidades/Unidad5/Unidad5'
import unidad6 from './android/Componentes/Unidades/Unidad6/Unidad6'

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
  },unidad2:{
    screen:unidad2
  },unidad3:{
    screen:unidad3
  },unidad4:{
    screen:unidad4
  },unidad5:{
    screen:unidad5
  },unidad6:{
    screen:unidad6
  },
},{
  navigationOptions : {
    header:null
  }
});