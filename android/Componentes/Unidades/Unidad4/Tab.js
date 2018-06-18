import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,Linking,
  Image,StatusBar,ImageBackground,
  ListView,ScrollView, TouchableNativeFeedback,Alert,TouchableOpacity,TouchableWithoutFeedback,TouchableHighlight
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H1,Thumbnail,Rightpla,CardItem} from 'native-base'
import { TabNavigator } from 'react-navigation';
import ImageZoom from 'react-native-image-pan-zoom';

  class cuatropuntouno extends React.Component {
    render() {
      return (        
        <Container style={styles.fondo}>
        <StatusBar 
            barStyle="light-content"
            backgroundColor='#FF473A'
            animated = {true}
            hidden = {false} /> 
          <ScrollView>
        <View style={styles.titulo}> 
          <Text><H1>Planeación estratégica del proyecto</H1></Text>          
        </View>
        <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
            En los negocios la planeación estratégica es fundamental, dado que proporciona una guía o directriz del rumbo que habrá de seguir la organización.{"\n"}{"\n"}
          
            Como parte de la planeación estratégica se definen la visión, la misión, los valores; se analiza la situación tanto interna como externa de la empresa y se establecen objetivos a largo plazo y desde luego se diseñan las estrategias para lograrlos.  
            {"\n"}{"\n"}
            La planeación estratégica exige tener una visión holística del negocio; es realizada por quien (es) lidera (n) la organización; teóricamente se realiza para un periodo de 5 a 10 años, aunque hoy en día, debido a la dinámica actual de los mercados el periodo puede reducirse de 3 a un máximo de 5 años. 
           
          </Text>          
          </View>
          
          
          <View style={styles.titulo}> 
            <Text><H1>Misión </H1></Text>          
          </View>
        <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Definir la misión puede ser complejo; sin embargo, es necesario. La misión forma parte de la filosofía empresarial e indica claramente el propósito o razón de ser de una organización o empresa.
            {"\n"}{"\n"}
            La misión: 
            {"\n"}{"\n"}
            Manifiesta la convicción de hacer algo
            {"\n"}{"\n"}
            Es una guía, orienta las acciones de los integrantes de la organización
            {"\n"}{"\n"}
            Debe establecerse por escrito
            {"\n"}{"\n"}
            Al redactar la misión se recomienda que contenga los siguientes elementos:
            {"\n"}{"\n"}
            a.Bien o servicio. Hacer referencia al bien o servicio y lo que éste hace por y para las personas;
            {"\n"}{"\n"}
            b.Mercado al que se dirige. Se defin econ base en ¿quiénes son los clientes? Y ¿a qué se debe que adquieren el bien o servicio?;
            {"\n"}{"\n"}
            c.Prioridad de la organización o deseos o preferencias de los accionistas. Expresa los valores, creencias y aspiraciones que guiarán la actividad de la organización;
            {"\n"}{"\n"}
            d.Responsabilidad social. Comunica las aportaciones o beneficios para la sociedad en general. Por ejemplo, cuidado al medio ambiente, no generar desperdicios tóxicos, realizar actividades altruistas, plantas tratadoras de agua, fuente de empleos, entre otros.
            {"\n"}{"\n"}
            Algunos ejemplos de MISIÓN son:
             </Text>
          </View>
            
            
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={180}
                       imageWidth={width}
                       imageHeight={180}>
                <Image style={{width:width, height:180}}
                        source={require('../../../images/Unidad4/4p1p1.png')}/>
          </ImageZoom>
           
             
          <View style={styles.titulo}> 
            <Text><H1>Visión </H1></Text>          
          </View>
        <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            La visión debe dar respuesta a las siguientes preguntas:
             </Text>
          </View>
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            La visión indica hacia dónde se dirige una empresa o qué es aquello en lo qué pretende convertirse en el largo plazo.
            {"\n"}{"\n"}
            Establecer la visión de una empresa permite enfocar los esfuerzos de todos sus integrantes hacia la misma dirección; la visión tiene un gran poder orientador, es con base en ésta que se formulan los objetivos y las estrategias para conseguirlos.
            {"\n"}{"\n"}
            Algunos ejemplos de VISIÓN son:
            
             </Text>
          </View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={180}
                       imageWidth={width}
                       imageHeight={180}>
                <Image style={{width:width, height:180}}
                        source={require('../../../images/Unidad4/4p1p2.png')}/>
          </ImageZoom>
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Una vez que leíste el tema, revisa las primeras diapositivas de la unidad 2 (mismas que encontrarás en la sección de recursos) y posteriormente resuelve la siguiente evidencia de aprendizaje:
             </Text>
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrouno.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ev1.png')}
          resizeMode = 'cover'
          />
           </TouchableHighlight>
          
          <View style={styles.titulo}> 
            <Text><H1>Planteamiento de objetivos del proyecto </H1></Text>          
          </View>
        <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Un componente fundamental en la etapa de planeación corresponde a la definición de objetivos. Un objetivo es algo que se quiere lograr y a lo que, de manera consciente, se dirigen las acciones y los esfuerzos.
            {"\n"}{"\n"}
            Cuando una empresa establece como uno de sus objetivos "tener utilidades", lo cierto es que no está definiendo qué porcentaje de utilidades pretende lograr, tampoco está especificando para qué fecha ni cómo lo piensa conseguir. Por tanto, debido a que no se están considerando parámetros de medición ni de control no se están planteando objetivos sino propósitos o buenos deseos. Si los objetivos no están bien planteados no se puede esperar mucho de ellos.
            {"\n"}{"\n"}
            Analiza la siguiente tabla y podrás observar las diferencias entre redactar buenos deseos y objetivos:
             </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad4/t1p1p3.png')}
          resizeMode = 'cover'
          />
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad4/4.1.3.png')}
          resizeMode = 'cover'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Por otro lado, debes tomar en cuenta que los objetivos no son iguales en razón de que existen algunos más importantes que otros, es decir, obedecen a una jerarquía. En la jerga administrativa las podemos plantear básicamente en tres niveles (alta herencia, gerencia media y operacionales).
            
             </Text>
          </View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={220}
                       imageWidth={width}
                       imageHeight={220}>
                <Image style={{width:width, height:220}}
                        source={require('../../../images/Unidad4/pira.png')}/>
          </ImageZoom>
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Algunos de los objetivos generales o de la Alta Gerencia podrían ser:
            {"\n"}{"\n"}
            Ampliar la gama de productos, ampliar la planta, comprar otra(s) empresa(s), responsabilidad social.
            {"\n"}{"\n"}
            Innovación en productos, en servicios, en procesos, en canales de distribución.
            {"\n"}{"\n"}
            Adquisición y venta de activos
            {"\n"}{"\n"}
            Expansión comercial
            {"\n"}{"\n"}
            Certificaciones ISO
            {"\n"}{"\n"}
            Algunos de los objetivos específicos o de la Gerencia media podrían ser:
            {"\n"}{"\n"}
            a.Comerciales: Relacionados con las ventas y con los clientes.
            {"\n"}{"\n"}
            b. De operación: Relacionados la producción y prestación del servicio y en general con la operación de la empresa. Ejemplos: Reducción de desperdicios, mermas, costos y gastos. Tiempos y movimientos.
            {"\n"}{"\n"}
            c.De capital humano: ¿Qué esperamos del personal y que estamos dispuestos a dar como empresa? Prosperidad de los trabajadores (prestaciones, capacitación), reclutamiento, selección, perfil (descripción de puestos).
            {"\n"}{"\n"}
            d.Financieros: Rentabilidad, inversión y financiamiento.
            {"\n"}{"\n"}
            A continuación encontrarás la evidencia de aprendizaje IV.2 con la que obtendrás mayor compresión del tema:
                         </Text>
                         </View>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrodos.pdf')}>
            <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ev2.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>

          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Ahora ya cuentas con los elementos necesarios para realizar la siguiente evidencia de aprendizaje.
                         </Text>
                         </View>
                         <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrotres.pdf')}>

         <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ev3.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>
        </ScrollView>
        </Container>
);
    }
  }  
  class cuatropuntodos extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Organización y recursos humanos</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
             EL nivel de operación y los objetivos estratégicos de la empresa son piezas clave para definir el tipo, las características y el tamaño de organización o estructura de recursos humanos que se requiere para hacer frente a ese nivel de operación y lograr los objetivos planteados.
              {"\n"}{"\n"}
              Hay que dejar muy claro qué actividades y funciones se harán en cada uno de los puestos, cuál es el grado de autoridad y responsabilidad que tienen, qué interrelación tienen con otros puestos y áreas de la empresa, así como el perfil de las personas que habrán de desempeñarlos. La información anterior se documenta en el análisis y descripción de puestos.
              {"\n"}{"\n"}
              Toma en cuenta que las empresas son entes dinámicos que, por lo mismo, evolucionan en el tiempo; es recomendable no preparar una estructura ideal, sino una que sea flexible y pueda adaptarse a los cambios tanto internos como externos (mercado).
              {"\n"}{"\n"}
              Una adecuada estructura de recursos humanos contribuye a formalizar la comunicación. colaboración, compromiso  y cumplimiento de las actividades que realiza todo el personal de la empresa.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:370}]}
          source={require('../../../images/Unidad4/4.2.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
            <Text><H1>Organización y administración de la empresa </H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Independientemente del número de empleados que tenga una organización, pueden ser cinco o diez mil se debe diseñar un organigrama (en el idioma inglés chart).  
            {"\n"}{"\n"}
            El organigrama es una representación gráfica que muestra la estructura y la relación de las diferentes áreas y puestos dentro de una organización así como el grado de autoridad y de responsabilidad que cada uno tiene.
            </Text>
          </View>
          
           <Image
          style = {[styles.imagenes,{height:330}]}
          source={require('../../../images/Unidad4/4.2.1.png')}
          resizeMode = 'cover'
          />
          
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            El organigrama está conformado por rectángulos homogéneos y líneas (en su mayoría continuas y muy pocas punteadas); dentro de los rectángulos se escribe el nombre del puesto o cargo, algunas organizaciones adicionalmente indican el nombre de la persona que ocupa el puesto. 
            {"\n"}{"\n"}
            Las líneas continuas indican los canales formales de comunicación; en tanto que las líneas discontinuas indican el staff, éste está compuesto por especialistas y asesores cuya función es básicamente proporcionar información experta como apoyo para la toma de decisiones. En muchas ocasiones el staff no forma parte de la empresa y se subcontrata. 
            </Text>
          </View>
            <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad4/simbolo.png')}
          resizeMode = 'cover'
          />
            
          
          <View style={styles.titulo}> 
            <Text><H1>Consideraciones acerca de los organigramas </H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            No hay dos organigramas iguales (cada empresa diseña, de acuerdo a sus necesidades, su propio organigrama)  
            {"\n"}{"\n"}
            La organización puede modificarlo en el momento que lo requiera
            {"\n"}{"\n"}
            De acuerdo con Angulo (2016) los organigramas solo deben llegar hasta el nivel de los supervisores o jefes del último nivel, no incluyen los cargos de trabajadores o empleados
            {"\n"}{"\n"}
            Debe estar vigente
            {"\n"}{"\n"}
            Por su impacto económico, los niveles jerárquicos deben ser lo mínimos e indispensables
            {"\n"}{"\n"}
            Es momento de realizar la siguiente evidencia de aprendizaje:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatroseis.pdf')}>
           <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ev4.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>
          <View style={styles.titulo}> 
            <Text><H1>En la fase de diseño</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Independientemente de si el proyecto se quiera emprender por una empresa ya establecida o por una nueva, la estructura organizacional para la estapa de diseño del proyecto tiene características muy particulares:
            </Text>
          </View>
            <Image
          style = {[styles.imagenes,{height:290}]}
          source={require('../../../images/Unidad4/4.2.2.png')}
          resizeMode = 'cover'
          />
             
          <View style={styles.titulo}> 
            <Text><H1>En la fase de construcción</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Como recordarás la etapa de construcción o de ejecución del proyecto se inicia cuando ya se tiene el capital (propio o financiado) para la inversión, por lo que ya es posible acondicionar y equipar las diferentes áreas; en términos generales, en esta etapa se disponen y se asignan los recursos y se dota de infraestructura física, laboral y directiva.
            {"\n"}{"\n"}
              En esta fase, en lo que se refiere a la organización y recursos humanos:
            </Text>
          </View>
            <Image
          style = {[styles.imagenes,{height:210}]}
          source={require('../../../images/Unidad4/4.2.3.png')}
          resizeMode = 'cover'
          />
          
          <View style={styles.titulo}> 
            <Text><H1>En la fase de operativa</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            La fase operativa consiste en la puesta en marcha, es prácticamente el funcionamiento del proyecto, lo que implica llevar a cabo el proceso productivo, la comercialización y venta del producto. En esta fase hay una etapa de prueba que permite detectar desperfectos, deficiencias y realizar los ajustes correspondientes.
            {"\n"}{"\n"}
              En esta etapa organizacional considerar que: 
            {"\n"}{"\n"}
            De acuerdo a las necesidades de la nueva unidad productiva, se pueden crear nuevas áreas y puestos por lo que aumentan contrataciones
            {"\n"}{"\n"}
            Se actualiza el organigrama
            {"\n"}{"\n"}
            Se continúa trabajando en el análisis y descripción de puestos
            </Text>
          </View>
            <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad4/4.2.4.png')}
          resizeMode = 'cover'
          />
        </ScrollView>
        </Container>
      );
    }
  }
  class cuatropuntotres extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Gestión legal para crear la empresa</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            Cada país cuenta con un ordenamiento jurídico que se rige por su Constitución Política, leyes, reglamentos, códigos y decretos. Antes de poner en marcha un proyecto se deben acatar las disposiciones jurídicas vigentes razón por la que es imprescindible, de acuerdo al país, conocer la legislación aplicable a las actividades económicas y comerciales.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad4/4.3.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
            <Text><H1>Fuentes de información </H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Para revisar todos los requisitos legales a nivel federal. estatal y local necesarios para el inicio de actividades del negocio los puedes encontrar dando click en la siguiente liga:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('http://www.sedeco.cdmx.gob.mx/')}>
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad4/botones.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>
        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Después de consultar el link anterior, realiza la siguiente actividad:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatronueve.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ea9.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <View style={styles.titulo}> 
            <Text><H1>Requisitos fiscales, legales y gubernamentales para el inicio de actividades de la empresa </H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />        
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
           En México existen dos figuras para realizar actividades empresariales: persona física y persona moral. Los requisitos fiscales, legales y gubernamentales para iniciar actividades como PERSONA FÍSICA o como PERSONA MORAL son prácticamente los mismos, la única diferencia es que las personas físicas no tienen acta constitutiva.
           {"\n"}{"\n"}
           Los requisitos fiscales, legales y gubernamentales para iniciar actividades como PERSONA MORAL son: 
            </Text>
          </View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={420}
                       imageWidth={width}
                       imageHeight={420}>
                <Image style={{width:width, height:420}}
                        source={require('../../../images/Unidad4/tabla.png')}/>
          </ImageZoom>
          
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
           Para concluir está unidad temática es necesario realizar las siguientes evidencias de aprendizaje:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrocuatro.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/EA4.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrocinco.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/EA5.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatrosiete.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ea7.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AAA3LTQnqu9vR-I0G-zhJy6_a/Unidad4?dl=0&preview=cuatroocho.pdf')}>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad4/ea8.png')}
          resizeMode = 'cover'
          />
          </TouchableHighlight>
           <View style={styles.cuerpo}>
            <Text style={styles.letras}>
           Al igual que los estudios previos (el de mercado y el técnico) con el estudio administrativo y de organización se obtiene información muy importante; sobre todo aquella que tiene que ver con la normatividad y requisitos fiscales, legales gubernamentales para el inicio de actividades de la empresa. Si ésta cumple con toda la normatividad y requisitos, entonces habrá factibilidad en el estudio administrativo y de organización y se puede continuar con el estudio financiero, tema del que trata la siguiente unidad temática.
            </Text>
          </View>
          </ScrollView>
        </Container>
      );
    }
  }
 
  var {width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    fondo:{
      backgroundColor : 'white'
      
    },
    imagenes:{
      width: width,
      marginTop: 10,
      marginBottom:10
    },
    cuerpo:{
      margin: 20,
    },
    titulo:{
      margin:20
    },
    letras:{
      color:'black'
    },
    imagefondo:{
      flex:1
    }
  });
  
  export default TabNavigator({
    '4.1': { screen: cuatropuntouno },
    '4.2': { screen: cuatropuntodos },
    '4.3': { screen: cuatropuntotres }    
  },{
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor : 'black',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#FF473A',
        },
      }

    }
);
