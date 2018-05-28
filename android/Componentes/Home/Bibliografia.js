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
export default class Bibliografia extends Component {

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
            <Title style={{color:'white'}}>Bibliografía</Title>
          </Body>
        </Header>
        <View style={styles.containerr}>
        
          <WebView
            source={{
              html:
              "<style>p{text-align:justify}</style>"+
              "<ul>"+
              " <li>Angulo, L. (2016). Proyectos Formulación y evaluación. México: Alfaomega</li>"+
              "<li>Araujo, D. (2012). Proyectos de inversión, análisis, formulación y evaluación práctica. México: Trillas </li>"+
              "<li>Baca, G. (2006). Evaluación de proyectos. México: Mc Graw Hill, 5ta. Edición. </li>"+
              "<li>Block, Stanley B.; Hirt, Geoffrey A. (2001). Fundamentos de Gerencia Financiera. México: Mc Graw Hill. Novena edición. </li>"+
              "<li>Fernández, S. (2010). Los proyectos de inversión: evaluación financiera. Costa Rica: Editorial Tecnológica de Costa Rica, 2a. edición.</li>"+
              "<li>Fischer, L; Espejo, J. (2004). Mercadotecnia. México: Mc Graw Hill, 3ra. Edición. </li>"+
              "<li>Gallardo, J. (1998). Formulación y evaluación de proyectos de inversión. México: Mc Graw Hill. </li>"+
              "<li>García, V. (2006). Introducción a las finanzas. México: CECSA </li>"+
              "<li>Geldes, R., y Loyola, R. (n.d). Apuntes curso de Evaluación de proyectos. Universidad Tecnológica Metropolitana </li>"+
              "<li>Gitman, Laurence J. (2003). Administración Financiera. México: Pearson. décima edición. </li>"+
              "<li>Gómez, J. (2001). Formulación y evaluación de proyectos. México: IPN-UPIICSA</li>"+
              "<li>González, J. (2009). Manual de fórmulas financieras. México: Alfaomega, 1ra. Edición. </li>"+
              "<li>Hernández, A., y Hernández A. (2001). Formulación y evaluación de proyectos de inversión. México: ECAFSA, 4ta. edición. </li>"+
              "<li>Hitt, M., y Porter, L. (2006). Administración. México: Pearson. 9a. edición </li>"+
              "<li>Johnson, R.W., y Melicher, R.W. (2005). Administración Financiera. México: CECSA, 5a edición. </li>"+
              "<li>Lamb, C; et al. (2002). Marketing. México: Thomson Editores, sexta edición </li>"+
              "<li>Ley del Impuesto Sobre la Renta (ISR) 2017 </li>"+
              "<li>Mercado, S. (2011). Administración aplicada, teoría y práctica. México: Limusa. </li>"+
              "<li>Moyer, et al. (2005). Administración Financiera contemporánea. CENGAGE, learning. </li>"+
              "<li>Münch, L., y García, J. (2014). Fundamentos de administración. México: Trillas. </li>"+
              "<li>Murcia, J; et al (2010). PROYECTOS, formulación y criterios de evaluación. México: Alfaomega. </li>"+
              "<li>Nacional Financiera. (2001). Guía para la formulación y evaluación de proyectos de inversión. México: Nacional Financiero 9a. Reimpresión. </li>"+
              "<li>Rivera, F., y Hernández, G. (2010). Administración de Proyectos. México: Pearson. </li>"+
              "<li>Salazar, J. (2007). Cómo iniciar una pequeña empresa. México: Grupo Editorial Patria </li>"+
              "<li>Sapag, N. (2007). Proyectos de inversión formulación y evaluación. México: Pearson. </li>"+
              "<li>Taylor, J. (1998). Economía. México: CECSA. </li>"+
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
