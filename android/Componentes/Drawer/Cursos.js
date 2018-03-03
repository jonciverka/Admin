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
  Image,Dimensions,ImageBackground,TouchableHighlight
} from 'react-native';
import {Header,Body,Title,Grid,Container,Col,H2} from 'native-base'



export default class Cursos extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'white'}}>
        <Header style={{backgroundColor:'white'}}>
          <Body>
            <Title style={{color:'#FF473A'}}>Cursos.</Title>
          </Body>
        </Header>        
        <ImageBackground source={require('../../images/fondo.png')}  style={{flex:1}}>        
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => this.props.navigation.navigate('unidad1')}>
            <Text ><H2 style={{color:'#FF473A'}}>Unidad 1</H2></Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botones}>
            <Text>hola</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.botones}>
            <Text>hola</Text>
          </TouchableHighlight>
        </ImageBackground>
      </Container>
    );
  }
}

var {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imagenes: {
    width: width/2,
    height:width/2
  },
  columnas:{
    backgroundColor: 'white',
    flex:1
  },
  botones:{
    width:width/2,
    justifyContent: 'flex-end',
    height:width/2+10,
    alignItems: 'center',
  }
});
