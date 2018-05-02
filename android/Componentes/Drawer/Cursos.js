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
  View,StatusBar,
  Image,Dimensions,ImageBackground,TouchableHighlight
} from 'react-native';
import {Header,Body,Title,Grid,Container,Col,H2,Left,Right} from 'native-base'



export default class Cursos extends Component {
  render() {
    return (
      <Container style={{
        backgroundColor:'white',
        
        }}>      
      <StatusBar 
            barStyle="light-content"
            backgroundColor='white'
            animated = {true}
            hidden = {false} /> 
        <Header style={{backgroundColor:'white'}}>
          <Body>
            <Title style={{color:'#FF473A'}}>Cursos.</Title>
          </Body>
        </Header>        
        <ImageBackground source={require('../../images/fondo.png')}  style={{flex:1}}>   


        <View style={{
           alignItems: 'flex-start',
           justifyContent: 'flex-start',
           flexDirection: 'row'
           }}>
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => this.props.navigation.navigate('unidad1')}>
            <Text></Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.botones2}
            onPress={() => this.props.navigation.navigate('unidad2')}>
            <Text></Text>
          </TouchableHighlight>
        </View>
        </ImageBackground>
      </Container>
    );
  }
}

var {width} = Dimensions.get('window')
const styles = StyleSheet.create({

  botones:{
    width:(width/2),
    height:width/2+10,
  },
  botones2:{
    width:(width/2),
    height:width/2+10,
  }
});
