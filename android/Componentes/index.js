
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {Button,Content,Container} from 'native-base'
import FinanzasPersonales from './Drawer/FinanzasPersonales'
import ProyectosdeInversion from './Drawer/ProyectosdeInversion'
import Contabilidad from './Drawer/Contabilidad'
import Administracion from './Drawer/Administracion'
import Innovacion from './Drawer/Innovacion'
import Cursos from './Drawer/Cursos'

const RootDrawer = DrawerNavigator({
    FinanzasPersonales:{screen: FinanzasPersonales},
    ProyectosdeInversion:{ screen: ProyectosdeInversion},
    Administracion :{screen: Administracion},
    Contabilidad:{screen: Contabilidad},
    Innovacion:{screen:Innovacion},
    Cursos:{screen:Cursos}
})

export default RootDrawer;