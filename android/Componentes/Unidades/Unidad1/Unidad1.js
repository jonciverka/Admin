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
  View,ScrollView
} from 'react-native';
import {List,ListItem,Header,Container,Body,Title,Left,Button,Icon} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

export default class Unidad1 extends Component {

  render() {
    return (
        <Container>
        <Header style={{backgroundColor:'#FF5752'}}>
        <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={34} style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Unidad 1</Title>
          </Body>
        </Header>
        <ScrollView>
        <List>
            <ListItem itemDivider>
            <Text>1.1</Text>
            </ListItem> 
            <ListItem>
            <Text>1.1 ¿Qué es un proyecto?</Text>
            </ListItem> 
            <ListItem itemDivider>
            <Text>1.2</Text>
            </ListItem> 
            <ListItem>
            <Text>1.2 Tipos de proyectos de inversión.</Text>
            </ListItem>
            <ListItem itemDivider>
            <Text>1.3</Text>
            </ListItem> 
            <ListItem >
            <Text>1.3 Modelos de inversiones.</Text>
            </ListItem>           
            <ListItem >
            <Text>1.3.1 Por su operación.</Text>
            </ListItem>                        
            <ListItem >
            <Text>1.3.2 Por su flujo de efectivo .</Text>
            </ListItem>                                   
            <ListItem >
            <Text>1.3.3 Por su punto de vista económico .</Text>
            </ListItem>            
            <ListItem itemDivider>
            <Text>1.4</Text>
            </ListItem>             
            <ListItem >
            <Text>1.4 ¿Por qué son necesarios los proyectos de inversión?</Text>
            </ListItem>           
            <ListItem itemDivider>
            <Text>1.5 </Text>
            </ListItem>           
            <ListItem >
            <Text>1.5 Ciclo de vida de los proyectos.</Text>
            </ListItem>              
            <ListItem itemDivider>
            <Text>1.6</Text>
            </ListItem>                
            <ListItem >
            <Text>1.6 Formulación de proyectos.</Text>
            </ListItem>                                 
            <ListItem >
            <Text>1.6.1 Estudio de mercado .</Text>
            </ListItem>                                   
            <ListItem >
            <Text>1.6.2 Estudio técnico .</Text>
            </ListItem>                                   
            <ListItem >
            <Text>1.6.3 Estudio administrativo y de organización.</Text>
            </ListItem>                                   
            <ListItem >
            <Text>1.6.4 Estudio financiero.</Text>
            </ListItem>                                   
            <ListItem >
            <Text>1.6.5 Estudio sustentable, social y financiero.</Text>
            </ListItem>          
      </List>
      </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  letras:{
      color:'black',
      
  }
});
