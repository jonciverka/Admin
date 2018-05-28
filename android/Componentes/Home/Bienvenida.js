/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,WebView,
  View,ScrollView,StatusBar
} from 'react-native';
import {List,ListItem,Content,Header,Container,Body,Title,Left,Button,Icon,H1} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
export default class Bienvenida extends Component {

  render() {
    return (
        <Container style={{backgroundColor:'#FFF'}}>  
        <Header style={{backgroundColor:'#FF473A'}}>
        <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={34} style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Bienvenida</Title>
          </Body>
        </Header>  
        <Text style={styles.welcome}>
        <H1>Estimado(a) estudiante: </H1>
        </Text>
        <View style={styles.containerr}>
          <WebView
            source={{
              html:
              "<style>p{text-align:justify}</style>"+
              "<p>"+
              "Recibe la más cordial bienvenida a este curso, esperando que las próximas semanas sean enriquecedoras de experiencias de aprendizaje que contribuyan no solo a tu formación académica sino también a tu formación personal. Para lograr lo anterior, es indispensable tener en cuenta algunos elementos clave tales como: el compromiso e interacción de los actores (participantes y facilitadores del aprendizaje); la conformación de un gran equipo de trabajo colaborativo; y la realización de las evidencias de aprendizaje de acuerdo con las especificaciones proporcionadas en los tiempos establecidos. "+
              "</p>"+
              "<p>"+
              "Nuestra intención es que disfrutes esta experiencia educativa y ¡te deseamos el mayor de los éxitos! "+
              "</p>"+
              "<p>"+
              "Para cualquier duda o comentario, en relación a este material, puedes contactarnos en: "+
              "</p>"+
              "<p>"+
              "josefina.hernandez1006@gmail.com "+
              "</p>"+
              "<p>"+
              "yjimenezg@ipn.mx"+
              "</p>"

            }}
          />

        
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
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
      textAlign:'auto',      
  },
  letras2:{
      color:'black',
      textAlign:'right',      
  }
});
