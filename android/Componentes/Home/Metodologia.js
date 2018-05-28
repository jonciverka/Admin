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
export default class Metodologia extends Component {

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
            <Title style={{color:'white'}}>Metodología</Title>
          </Body>
        </Header>
        <View style={styles.containerr}>
        
          <WebView
            source={{
              html:
              "<style>p{text-align:justify}</style>"+
              "<p>"+
              "Esta Unidad de Aprendizaje comprende las siguientes unidades temáticas:"+
              "</p>"+
              "<p>"+
              "I. Elementos conceptuales y preparación de la administración y evaluación de proyectos "+
              "</p>"+
              "<p>"+
              "II. Estudio de mercado "+
              "</p>"+
              "<p>"+
              "III. Estudio técnico "+
              "</p>"+
              "<p>"+
              "IV. Estudio administrativo y de organización del proyecto "+
              "</p>"+
              "<p>"+
              "V. Estudio financiero"+
              "</p>"+
              "<p>"+
              "VI. Evaluación financiera e impacto social y ecológico del proyecto"+
              "</p>"+
              "<p>"+
              "Como un apoyo para tu autoaprendizaje, en cada una de las unidades temáticas tendrás oportunidad de: "+
              "</p>"+
              "<ul>"+
              " <li>Consultar el desarrollo de contenidos, donde encontrarás la explicación de cada uno de los temas con imágenes, cuadros, gráficas, organizadores gráficos y diversos ejemplos para reforzar tu aprendizaje;</li>"+
              " <li>Acceder a una sección de recursos, en donde encontrarás lecturas complementarias, artículos, videos de interés relacionados con los temas y presentaciones con diapositivas de cada una de las unidades temáticas; </li>"+
              " <li>Resolver un test con base en los conocimientos adquiridos, que te ayudará a obtener retroalimentación y a reflexionar sobre el progreso de tu aprendizaje; </li>"+
              " <li>Consultar aspectos de interés en cuanto a la evaluación y acreditación de la unidad de aprendizaje.</li>"+
              "</ul>"

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
