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
  View,Linking,Alert,ListView,ScrollView
} from 'react-native';
import {Button,Content,Container,Body,Header,H1,H2,H3} from 'native-base'

import * as firebase from 'firebase';
HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70 
PROFILE_IMAGE_MAX_HEIGHT = 80
PROFILE_IMAGE_MIN_HEIGHT = 40

export default class Perfil extends Component {
      static navigationOptions={
        header: null,
    }
    constructor(props){
      super(props)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      this.state={
        uid:'',
        email:'',
        grupo:'',
        dataSource:ds.cloneWithRows([]),
        Nombre:''
      }
    }
async componentWillMount(){
  try{
    let user = await firebase.auth().currentUser;
    if(user){
      this.setState({
        uid: user.uid,
        email: user.email,
        grupo : user.displayName
      })
    }   
  }catch(error){
    Alert.alert("error al sacar uid")
  }
  let path = "/Grupos/"+this.state.grupo+"/Alumnos/"+this.state.uid;
  firebase.database().ref(path).on('value',(snapshot) =>{
      let data = snapshot.val()
      if(data){
        this.setState({
          Nombre : data.Nombre,
          Tareas :  this.state.dataSource.cloneWithRows(data.Tareas)
          
        })
      }
  })
    
  
}
renderRow(rowData){
  return (
  <View>    
    <Content>     
          <List>
            <ListItem style={styles.card}>
              <Body>
                <Text note style={styles.precio}>{rowData.Nombre}</Text>
                <Text note>{rowData.Calificacion}</Text>
                <Text note>{rowData.Comentario}</Text>
              </Body>
            </ListItem>
          </List>
         
        </Content>
  </View>
  )
}

async _logout() {
    try {
        await firebase.auth().signOut();
        this.props.navigation.navigate('login')
    } catch (e) {
        console.log(e);
    }
}

  render() {
    const perfil = 
                  <View style={{marginTop: 100}}>
                  <Button  full  onPress={()=> this.props.navigation.navigate('login')}>
                  <Text style={{marginTop: 5}}> <H2>Inicia sesion para poder ver tu perfil </H2></Text>
                  <ScrollView> 
                  <ListView
                              enableEmptySections={true}
                              renderRow={this.renderRow.bind(this)}
                              dataSource={this.state.dataSource}
                    /> 
                    </ScrollView> 
                  <Text>Login</Text>
                  </Button>
                  
                  </View>;
                  
                  
    const perfil2 =   <View style={{marginTop: 50}}>
                      <Text style={{marginTop: 5}}><H1> {this.state.Nombre}</H1> </Text>
                      <Text style={{marginTop: 5}}><H2> {this.state.email}</H2></Text>
                      <Text style={{marginTop: 5}}> <H2>{this.state.grupo} </H2></Text>
                      <Button onPress={()=>this._logout()}>
                      <Text>Logout</Text>
                      </Button>


                      </View>;
                      
    let retorno;

    if(this.state.uid != ''){
      retorno = perfil2
    }else{
      retorno = perfil
    }
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
            position : 'absolute',
            height : HEADER_MAX_HEIGHT*2-30,
            backgroundColor:'white',
            top :  0,
            left :0,
            right:0,
            marginTop:HEADER_MAX_HEIGHT
          }}>
            {retorno}
            
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

