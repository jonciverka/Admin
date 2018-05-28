/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,WebView,
  View,ScrollView,StatusBar
} from 'react-native';
import {List,ListItem,Content,Header,Container,Body,Title,Left,Button,Icon,H1} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
export default class Programa extends Component {

  render() {
    return (
        <Container style={{backgroundColor:'#FFF'}}>  
        <Header style={{backgroundColor:'#FF473A'}}>
        <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={34} style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Programa de la unidad de aprendizaje</Title>
          </Body>
        </Header>        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
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
  letras:{
      color:'black',
      textAlign:'auto',      
  },
  letras2:{
      color:'black',
      textAlign:'right',      
  }
});
