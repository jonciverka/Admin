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
  Image,
  ImageBackground,StatusBar 
} from 'react-native';
import {Button,Content,Form,Item,Input,Container} from 'native-base'


export default class login extends Component {
    
    static navigationOptions={
        header: null,
    }
  render() {
    return (
        
        <ImageBackground source={require('../images/ipn.png')}  style={styles.fondo}>  
        <StatusBar 
            barStyle="light-content"
            backgroundColor='#FF473A'
            animated = {true}
            hidden = {false} />      
            <Container>
                <View style={styles.formu}>
                    <View style={{width : 300}}>
                    <Form style={{backgroundColor : 'white'}}>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    </View>
                </View>              
                <View style = {styles.Boton}>
                <View style={{width:300}}>
                    <Button 
                        block 
                        style={{backgroundColor:'#FF473A'}}
                        onPress={() => this.props.navigation.navigate('index')}>
                        <Text style = {{color : 'white'}}>Log in.</Text>
                    </Button>   
                </View>
                <View style={{width:300}}>
                    <Button light
                        block 
                       // style={{backgroundColor:'#FF473A'}}
                        onPress={() => this.props.navigation.navigate('index')}>
                        <Text style = {{color : 'black'}}>Entra como invitado.</Text>
                    </Button>   
                </View>
                </View>
            </Container>
        </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  fondo:{
      flex:1
  },
  formu:{
      flex:3,
      flexDirection: 'column',
      justifyContent: 'flex-end',        
      alignItems: 'center'
  },
  Boton:{
      flex: 1,        
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems:'center',
      paddingBottom:50
  }
      
});
