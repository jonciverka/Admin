
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {Button,Content,Container} from 'native-base'
import Perfil from './Drawer/Perfil'
import Dashboard from './Drawer/Dashboard'
import Cursos from './Drawer/Cursos'

const RootDrawer = DrawerNavigator({
    Perfil:{screen: Perfil},
    Cursos:{screen:Cursos},
    Dashboard:{ screen: Dashboard}
},{
  drawerBackgroundColor:'#FF473A',
  contentOptions:{
    activeTintColor: 'black',
    activeBackgroundColor: '#eeeeee',
    inactiveTintColor :'white'
  }
})

export default RootDrawer;