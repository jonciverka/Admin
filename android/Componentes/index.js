
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Alert,
  View,ImageBackground,Image
} from 'react-native';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import * as firebase from 'firebase';
import {Button,Content,Container,Body,Header} from 'native-base'

import Home from './Drawer/Home'
import Perfil from './Drawer/Perfil'
import Cursos from './Drawer/Cursos'
import Noticias  from './Drawer/Noticias'

class index extends Component{
  constructor(props){
    super(props)
    this.state={
      uid:'',
      email:'',
      Nombre:''
    }
  }
}

const RootDrawer = DrawerNavigator({
    Home:{screen: Home},
    Perfil:{screen: Perfil},
    Cursos:{screen:Cursos},
    Noticias:{screen:Noticias}
    
},{
  drawerBackgroundColor:'#F64747',
  
  contentOptions:{
    activeTintColor: 'black',
    activeBackgroundColor: '#eeeeee',
    inactiveTintColor :'white'
  },

 contentComponent: (props) => (
        <Container>
          <View style={styles.drawerHeader}>
          <ImageBackground source={require('./../images/material-design-4k.jpg.png')}  style={{flex:1}}>   
            <Body>
            <Image
            style={styles.drawerImage}
               source={require('./../images/user.png')} />
            <Text style={styles.texto}>
            </Text>
            <Text  style={styles.texto}>
              Correo
            </Text>
            </Body>
          </ImageBackground>
          </View>
          <Content>
          
            <DrawerItems {...props} />
          </Content>

        </Container>

      )
  })


const styles = StyleSheet.create({

  drawerHeader: {
    height: 150,
    backgroundColor: 'white'
  },
  drawerImage: {
    marginTop :10,
    height: 80,
    width: 80,
    borderRadius: 75,
    borderColor : 'white',
    borderWidth : 3,
  },
  texto:{
    color:'black'
    
  }

})

export default RootDrawer