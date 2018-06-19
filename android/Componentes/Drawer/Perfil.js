/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,Text,
  View,Linking,Alert,ListView,ScrollView
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H3,H1,H2,Thumbnail,Rightpla,Separator,Icon, Left, Right,Title,Header} from 'native-base'

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
        uid_g:'',
        dataSource : ds.cloneWithRows([]),
        Nombre:'',
        grupo:''
      }
    }
async componentWillMount(){
  try{
    let user = await firebase.auth().currentUser;
    if(user){
      this.setState({
        uid: user.uid,
        email: user.email,
        uid_g : user.displayName
      })
    }   
  }catch(error){
    Alert.alert("error al sacar uid")
  }
  let path2 = "/Grupos/"+this.state.uid_g
  firebase.database().ref(path2).on('value',(snapshot) =>{
    let data = snapshot.val()
    if(data){
      this.setState({
        grupo : data.name,
        
      })
    }
})

  let path = "/Grupos/"+this.state.uid_g+"/Alumnos/"+this.state.uid;
  firebase.database().ref(path).on('value',(snapshot) =>{
      let data = snapshot.val()
      if(data){
        this.setState({
          Nombre : data.Nombre,
          dataSource :  this.state.dataSource.cloneWithRows(data.Tareas)
          
        })
      }
  })
    
  
}
renderRow(rowData){
  return (
  <View>    
    <Content>     
          <List>
            <ListItem >
              <Body>
                <Text note>Nombre de la tarea:<Text style={{color: 'black', fontSize: 15}}>{rowData.Nombre}</Text></Text>
                <Text note>Calificacion:<Text style={{color: 'black', fontSize: 15}}> {rowData.Calificacion}</Text></Text>
                <Text note>Comentario :<Text style={{color: 'black', fontSize: 15}}> {rowData.Comentario}</Text></Text>
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
                  <View style={{marginTop: 0}}>
                  <Text style={{marginTop: 5}}> <H2>Inicia sesion para poder ver tu perfil </H2></Text>
                  <Button  full  onPress={()=> this.props.navigation.navigate('login')}>         
                  <Text style={{color:'white'}}>Login</Text>
                  </Button>
                  
                  </View>;
                  
                  
    const perfil2 =   <View >                      
                      <Header noLeft>
                      <Left>
                         <Title style={{color:'white'}}>{this.state.grupo}</Title>
                      </Left>
                      <Body>
                        <Title>{this.state.Nombre}</Title>
                      </Body>
                      <Right>
                        <Button transparent onPress={()=>this._logout()}>
                          <Text style={{color:'white'}}>Logout</Text>
                        </Button>
                      </Right>
                    </Header>
                      <View style={{ backgroundColor:'white'}}>
                      
                        <ListView
                                    enableEmptySections={true}
                                    renderRow={this.renderRow.bind(this)}
                                    dataSource={this.state.dataSource}
                          />   
                      
                      </View>

                      </View>;
                      
    let retorno;

    if(this.state.uid != ''){
      retorno = perfil2
    }else{
      retorno = perfil
    }
    return (
      <View style={{backgroundColor:'white'}}>      
            {retorno}
      </View>
    );
  }
}

