/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Image,
  View,Linking
} from 'react-native';

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70 
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

export default class Perfil extends Component {
  static navigationOptions={
    header: null,
}

  render() {
    return (
      <View style={{flex:1}}>
        <View style = {{
          position : 'absolute',
          top :  0,
          left :0,
          right:0,
          backgroundColor : '#F64747',
          height : HEADER_MAX_HEIGHT

        }}>
        </View>
        <View style={{
            height:PROFILE_IMAGE_MAX_HEIGHT,
            width : PROFILE_IMAGE_MAX_HEIGHT,
            borderRadius : PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor : 'white',
            borderWidth : 3,
            overflow : 'hidden',
            marginTop:HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2),
            marginStart: 10
         }}>
         <Image source= {require('./../../images/user.png')}
            style={{flex:1,width:null,height:null}}
          >
          </Image>
          </View>
          
      </View>
    );
  }
}

