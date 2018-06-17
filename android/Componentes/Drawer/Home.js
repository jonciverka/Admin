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
  Image,Dimensions,ImageBackground,TouchableHighlight,Linking
} from 'react-native';
import {Header,Body,Title,Grid,Container,Col,H2,Left,Right} from 'native-base'
import * as firebase from 'firebase';


export default class Home extends Component {

  render() {
    return (
      <Container style={{
        backgroundColor:'white',
        
        }}>      
      <StatusBar 
            barStyle="light-content"
            backgroundColor='#007AF5'
            animated = {true}
            hidden = {false} />      
        <ImageBackground source={require('./../../images/fondo_home.png')}  style={{flex:1}}>   


        <View style={{
           alignItems: 'flex-start',
           justifyContent: 'flex-start',
           flexDirection: 'row'
           }}>
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => this.props.navigation.navigate('Bienvenida')}>
            <Text></Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => this.props.navigation.navigate('Metodologia')}>
            <Text></Text>
          </TouchableHighlight>          
        </View>
        <View style={{
           alignItems: 'flex-start',
           justifyContent: 'flex-start',
           flexDirection: 'row'
           }}>
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => this.props.navigation.navigate('Bibliografia')}>
            <Text></Text>
          </TouchableHighlight>
          
          <TouchableHighlight 
            style={styles.botones}
            onPress={() => Linking.openURL('https://www.dropbox.com/s/na29cizeral894h/trescinco.pdf?dl=1')}>
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
    height:width/2+130
  }
});
