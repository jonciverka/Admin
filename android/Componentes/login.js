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
  ImageBackground,StatusBar,Alert
} from 'react-native';
import {Button,Content,Form,Item,Input,Container} from 'native-base'
import * as firebase from 'firebase';


export default class login extends Component {
    constructor (props){
        super(props)
        this.state={
            Email:'',
            Password:'',
            user :''
        }
    }
    
    static navigationOptions={
        header: null,
    }
    Login=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.Password)
        .then((LoggedInUser)=>{
          this.setState({user:LoggedInUser})
          Alert.alert("Usuario logueado Correctamente")      
          this.props.navigation.navigate("index")
        }).catch((error)=>{
          let errors = error.message
          Alert.alert("error",`${errors}`)
        })
    }
  render() {
    return (
        
        <ImageBackground source={require('../images/ipn.png')}  style={styles.fondo}>  
        <StatusBar 
            barStyle="light-content"
            backgroundColor='#F64747'
            animated = {true}
            hidden = {false} />      
            <Container>
                <View style={styles.formu}>
                    <View style={{width : 300}}>
                    <Form style={{backgroundColor : 'white'}}>
                        <Item>
                            <Input 
                            onChangeText ={
                                (text)=>{
                                    this.setState({Email:text})
                                }
                            }
                            placeholder="Correo electronico" />
                        </Item>
                        <Item last>
                            <Input                            
                            secureTextEntry={true}
                            onChangeText ={
                                (text)=>{
                                    this.setState({Password:text})
                                }
                            } 
                            placeholder="Contraseña personal" />
                        </Item>
                    </Form>
                    </View>
                </View>              
                <View style = {styles.Boton}>
                <View style={{width:300}}>
                    <Button 
                        block 
                        style={{backgroundColor:'#F64747'}}
                        onPress ={this.Login}>
                        <Text style = {{color : 'white'}}>Log in.</Text>
                    </Button>   
                </View>
                              
                <View style={{width:300}}>
                    <Button dark
                        block 
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style = {{color : 'white'}}>¡Registrate!</Text>
                    </Button>   
                </View>
                <View style={{width:300}}>
                    <Button light
                        block 
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
      flex:2,
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
