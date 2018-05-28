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
import Register from './android/Componentes/Register'
import Register1 from './android/Componentes/Register1'
import Bibliografia from './android/Componentes/Home/Bibliografia'
import Metodologia from './android/Componentes/Home/Metodologia'
import Bienvenida from './android/Componentes/Home/Bienvenida'
import Programa from './android/Componentes/Home/Programa'

import * as firebase from 'firebase';
export default class App extends Component {
  constructor(props){
    super(props)
    firebase.initializeApp({
        apiKey: "AIzaSyAhfE_suTjV7EsT-gOluBtnecTeCiI6TKk",
        authDomain: "polilibro.firebaseapp.com",
        databaseURL: "https://polilibro.firebaseio.com",
        projectId: "polilibro",
        storageBucket: "polilibro.appspot.com",
        messagingSenderId: "616532161554"
    

  });
}
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
  },Register:{
    screen:Register
  },Register1:{
    screen:Register1
  },Bibliografia:{
    screen:Bibliografia
  },Metodologia:{
    screen:Metodologia
  },Bienvenida:{
    screen:Bienvenida
  },Programa:{
    screen:Programa
  }
},{
  navigationOptions : {
    header:null
  }
});