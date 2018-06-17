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
import {Header,Body,Title,Grid,Container,Col,H2,Left,Right,Button} from 'native-base'
import Wordpress from 'react-native-wordpress';


export default class Noticias extends Component {
    
  render() {
    let strings={
        categories:"Categories", 
        pages:"Pages", 
        searchText:"Write anything for search", 
        homepage:"Home", 
        warningText:"Ops someting is wrong", 
        nowordpressText:"Your address may not be a Wordpress site", 
        noexternalUseText:"Your address is Wordpress site but not accepted external use",
        tryanother:"TRY ANOTHER"
        };
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
            <Title style={{color:'#FF473A'}}>Noticias.</Title>
          </Body>
        </Header>        
        
   
    <Wordpress url={"https://asdaasd445129182.wordpress.com/"} 
                strings={strings} />
      </Container>
    );
  }
}

var {width} = Dimensions.get('window')
const styles = StyleSheet.create({

  botones:{
    width:(width/2),
    height:width/2+10
  }
});
