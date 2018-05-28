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

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            grupo:'',
            contra:''

        }
    }
    static navigationOptions={
        header: null,
    }
    grupo =()=>{
        let userNamePath = "/Grupos/"+this.state.grupo+"/contra"
        firebase.database().ref(userNamePath).on('value',(snapshot)=>{
            let data = snapshot.val() 
            if(data){
                if(data===this.state.contra){
                    this.props.navigation.navigate('Register1',{grupo:this.state.grupo})
                }else{
                    Alert.alert("Error","La contraseña no es la correcta, intetalo de nuevo, si el error continua contecte con su profesor. ") 
                }                
            }else{
                Alert.alert("Error","El Grupo no es correcto, intetalo de nuevo, si el error continua contacte con su profesor.")
            }                     
        })        
    }

  render() {
    return (
        
        <ImageBackground source={require('../images/ipn_register.png')}  style={styles.fondo}>  
        <StatusBar 
            barStyle="light-content"
            backgroundColor='#FF473A'
            animated = {true}
            hidden = {false} />      
            <Container>
                <View style={styles.formu}>
                    <View style={{width : 300}}>
                    <Form style={{backgroundColor : 'white'}}>
                        <Item last>
                            <Input 
                            onChangeText ={
                                (text)=>{
                                    this.setState({grupo:text})
                                }
                            }
                            placeholder="Grupo" />
                        </Item>                        
                        <Item last>
                            <Input 
                            onChangeText = {
                                (text) =>{
                                    this.setState({contra:text})
                                }
                            }
                            placeholder="Clave del grupo" />
                        </Item>  
                    </Form>
                    </View>
                </View> 
                <View style = {styles.Boton}>
                    <View style={{width:300}}>
                        <Button 
                            block 
                            style={{backgroundColor:'#FF473A'}}
                            onPress={this.grupo}>
                            <Text style = {{color : 'white'}}>Siguiete.</Text>
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
