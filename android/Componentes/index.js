
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import {Button,Content,Container} from 'native-base'
import introduccion from './Drawer/Introduccion'
import encuadre from './Drawer/encuadre'
import unidades from './Drawer/unidades'
import opinion from './Drawer/opinion'

const RootDrawer = DrawerNavigator({
    introduccion:{screen: introduccion},
    encuadre:{ screen: encuadre},
    unidades:{screen:unidades},
    opinion:{screen:opinion}
})

export default RootDrawer;