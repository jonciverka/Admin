
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,Alert,
  ImageBackground,StatusBar 
} from 'react-native';
import {Button,Content,Form,Item,Input,Container} from 'native-base'
import * as firebase from 'firebase';
export default class Register1 extends Component {
    constructor(props){        
        super(props)
        const { navigation } = this.props;
        this.state={
            Email:'',
            Password:'',
            uid :'',
            grupo:navigation.getParam('grupo', 'NO-ID'),
            Nombre:''
        }
        
    }


    static navigationOptions={
        header: null,
    }

    Registro= () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password)
        .then((LoggedInUser)=>{
         let user = firebase.auth().currentUser;
         user.updateProfile({
            displayName: this.state.grupo
         })
         this.setState({
            uid:user.uid
         })
         let Path_nombre = "/Grupos/"+this.state.grupo+"/Alumnos/"+this.state.uid;
         firebase.database().ref(Path_nombre).set({
             Nombre : this.state.Nombre
         })        
          Alert.alert("Usuario Registrado")
          this.props.navigation.navigate("login")
        }).catch((error)=>{
          let errors = error.message
          Alert.alert("error",`${errors}`)
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
                                    this.setState({Email:text})
                                }
                            }
                            placeholder="Correo electronico" />
                        </Item>                        
                        <Item last>
                            <Input 
                            onChangeText = {
                                (text) =>{
                                    this.setState({Password:text})
                                }
                            }
                            placeholder="Contraseña Personal" />
                        </Item>                                              
                        <Item last>
                            <Input 
                            onChangeText = {
                                (text) =>{
                                    this.setState({Nombre:text})
                                }
                            }
                            placeholder="Nombre completo" />
                        </Item>
                    </Form>
                    </View>
                </View> 
                <View style = {styles.Boton}>
                    <View style={{width:300}}>
                        <Button 
                            block 
                            //style={{backgroundColor:'#FF473A'}}
                            success
                            onPress ={this.Registro}
                            >                           
                            <Text style = {{color : 'white'}}>Registrar!.</Text>
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
