import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,StatusBar,Linking,
  ListView,ScrollView, TouchableNativeFeedback,Alert,TouchableOpacity,TouchableWithoutFeedback,TouchableHighlight
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H1,Thumbnail,Rightpla,CardItem} from 'native-base'
import { TabNavigator } from 'react-navigation';

import ImageZoom from 'react-native-image-pan-zoom';
class dospuntouno extends React.Component {
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
          <Text><H1>Estudio de mercado</H1></Text>          
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
            Como recordarás, lo primero que debemos hacer antes de producir y comercializar cualquier bien o servicio es determinar si éste será aceptado y comprado por el consumidor y la única forma de saberlo es realizando un estudio de mercado. El estudio de mercado es el conjunto de acciones que se llevan a cabo para saber la respuesta del mercado ante un producto o servicio determinado; para ello es necesario desarrollar una investigación de mercado y diseñar las estrategias de mercadotecnia que emprenderá la empresa para lograr posicionarse en el mercado.{"\n"}{"\n"}
            En términos generales la investigación de mercado contempla las siguientes actividades: recurrir a fuentes de información primaria y secundaria, realizar la segmentación de mercado, determinar y proyectar tanto la demanda como la oferta; en tanto que las de estrategias de mercadotecnia van orientadas al producto, precio, plaza y promoción (mezcla o mix de marketing).{"\n"}{"\n"}
            Una vez que se ha realizado ese estudio o análisis de mercado se está en posibilidades de saber: 
          </Text>          
          </View>
            <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad2/2.png')}
          resizeMode = 'stretch'
          />
          
          <View style={styles.titulo}> 
            <Text><H1>Conceptos: mercado, producto (descripción, naturaleza y usos) </H1></Text>          
          </View>
        <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
        <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad2/mercado.png')}
          resizeMode = 'stretch'
          />
          
              <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad2/producto.png')}
          resizeMode = 'stretch'
          />
          
              <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad2/descripcion.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad2/naturaleza.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:360}]}
          source={require('../../../images/Unidad2/1.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:240}]}
          source={require('../../../images/Unidad2/22.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:140}]}
          source={require('../../../images/Unidad2/3.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:280}]}
          source={require('../../../images/Unidad2/4.png')}
          resizeMode = 'stretch'
          />
          
           <View style={styles.cuerpo}>
            <Text style={styles.letras}>
          Con lo que has aprendido hasta el momento en esta unidad temática ya tienes los elementos suficientes para realizar la siguiente evidencia de aprendizaje:
             </Text>
          </View>
          
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/ea1.png')}
          resizeMode = 'stretch'
          />
          
        </ScrollView>
        </Container>
);
    }
  }  
class dospuntodos extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>

        <View style={styles.titulo}> 
            <Text><H1>Segmentación del mercado </H1></Text>          
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
           Antiguamente las empresas no se centraban en atender a grupos o segmentos específicos de consumidores; se dirigían a los mercados en forma indiscriminada y masiva. Actualmente, debido a las caracarecterísticas de la sociedad moderna (crecimiento de la población, cambio en los hábitos de consumo, la globalización, consumidores más exigentes) las empresas se ven en la necesidad de enfocarse a mercados cada vez más específicos y más atomizados, a esto se le conoce como:
             </Text>
          </View>
            
            
          <Image
          style = {[styles.imagenes,{height:320}]}
          source={require('../../../images/Unidad2/1.png')}
          resizeMode = 'stretch'
          />
           
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
           La escencia de la segmentación es conocer con mayor detalle a los consumidores; segmentar el mercado significa dividir el mercado total en grupos más pequeños y homogéneos. El segmento de mercado está compuesto por una parte de la población que está interesada en el producto que se oferta; este segmento se define en forma descriptiva y numérica.{"\n"}{"\n"}
           Para segmentar el mercado se toman en cuenta distintas variables, Murcia (2010) propone las siguientes:
             </Text>
          </View>
                
          <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad2/demograficas.png')}
          resizeMode = 'stretch'
          />
          
             
          <Image
          style = {[styles.imagenes,{height:110}]}
          source={require('../../../images/Unidad2/geograficas.png')}
          resizeMode = 'stretch'
          />
          
             
          <Image
          style = {[styles.imagenes,{height:130}]}
          source={require('../../../images/Unidad2/psicograficas.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad2/conductuales.png')}
          resizeMode = 'stretch'
          />
          
          
          <View style={styles.titulo}> 
            <Text><H1>Segmentación y evaluación del mercado meta </H1></Text>          
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
           Una vez que se ha realizado la segmentación y se han identificado los segmentos de mercado, se hace un análisis a conciencia con el propósito de definir si la empresa cuenta con los recursos y la capacidad necesarios para atender todos los segmentos, algunos de ellos, o solo a uno; esto es lo que se conoce como mercado meta, mercado objetivo o target, que consiste en seleccionar el segmento o segmentos que se tiene la capacidad de atender y enfocar en éste todos los esfuerzos de marketing.
             </Text>
          </View>
          
           <Image
          style = {[styles.imagenes,{height:340}]}
          source={require('../../../images/Unidad2/meta.png')}
          resizeMode = 'stretch'
          />
          
           <View style={styles.cuerpo}>
            <Text style={styles.letras}>
          Es momento de que realices la siguiente evidencia de aprendizaje:
             </Text>
          </View>
          
          
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/ea4.png')}
          resizeMode = 'stretch'
          />
          
          
        </ScrollView>
        </Container>
      );
    }
 }
class dospuntotres extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Estrategia del producto o servicio</H1></Text>          
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
            Recordemos que una estrategia está compuesta por una serie de acciones debidamente planeadas, entrelazadas, analizadas, evaluadas, y orientadas a lograr un determinado objetivo.{"\n"}{"\n"}
            Si consideramos que el producto que ofrece una empresa constituye uno de sus pilares medulares, es imprescindible diseñar estrategias que posibiliten su aceptación y posicionamiento en el mercado. Es bien sabido que el fracaso de un producto se debe en gran parte a la falta de estrategias o bien al seguimiento de estrategias mal diseñadas o planteadas.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:620}]}
          source={require('../../../images/Unidad2/2.3.png')}
          resizeMode = 'stretch'
          />
          
          
          <View style={styles.titulo}> 
            <Text><H1>Atributos del producto</H1></Text>          
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
            Todos los productos cuentan con elementos centrales y complementarios; tienen atributos tangibles e intangibles que los identifican y los distinguen de otros productos. No todos los productos cuentan con los mismos atributos, éstos están en función del tipo de producto. Entre los principales atributos de un producto se encuentran:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:1150}]}
          source={require('../../../images/Unidad2/111.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.titulo}> 
            <Text><H1>Estrategias de marca</H1></Text>          
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
            Por su impacto económico la marca o branding debe diseñarse desde un punto de vista estratégico; por la marca un producto será reconocido, aceptado o posicionado en la mente del consumidor. Es importante destacar que algunas marcas representan el más importante y valioso activo de las empresas.{"\n"}{"\n"}
            La marca se inscribe en el Instituto Mexicano de Propiedad Industrial (IMPI), que proteje legalmente a su propietario de forma que éste goza del derecho en exclusiva de comercializar sus productos o servicios en el país, bajo la marca en cuestión.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:440}]}
          source={require('../../../images/Unidad2/2.3.2.png')}
          resizeMode = 'stretch'
          />
          
          
            <View style={styles.titulo}> 
            <Text><H1>Estrategias de envase y etiquetado</H1></Text>          
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
            Tanto el envase como el etiquetado son parte importante de la imagen del producto.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:340}]}
          source={require('../../../images/Unidad2/empaque.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:340}]}
          source={require('../../../images/Unidad2/etiqueta.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:280}]}
          source={require('../../../images/Unidad2/envase.png')}
          resizeMode = 'stretch'
          />
          
          
            <View style={styles.titulo}> 
            <Text><H1>Estrategias de servicios de apoyo</H1></Text>          
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
            Los servicios son actividades o beneficios que un productor ofrece a un consumidor; en la actualidad existe un creciente interés en el servicio al cliente, y más aún, últimamente las empresas se están onfocando en crear experiencias para sus clientes, ésta es una de las formas más importantes de diferenciar a una empresa de otras.{"\n"}{"\n"}
            El servicio de apoyo del producto se ha convertido en una ventaja competitiva determinante; las empresas que proporcionan un servicio de alta calidad sin duda superarán a los competidores que están menos orientados a los servicios.{"\n"}{"\n"}
            Las empresas deben ser muy cuidadosas al identificar las necesidades de los clientes para diseñar tanto el producto como el sistema de apoyo al mismo.{"\n"}{"\n"}
            Las tres preocupaciones principales del cliente con respecto al producto que adquieren son:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:370}]}
          source={require('../../../images/Unidad2/2.3.4.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
           Por otro lado, los fabricantes deben establecer estrategias de cómo desean ofrecer el servicio posterior a la venta, incluyendo los servicios de mantenimiento, reparación, asesoría técnica y otros similares. Para ello podrían contar con un departamento de servicio al cliente; hacer convenios con distribuidores y detallistas para proporcionar los servicios; también podrían hacer que otras firmas independientes se encargaran de prestar dichos servicios.{"\n"}{"\n"}
           Después de revisar los temas: mercado y producto, podrás realizar la siguiente evidencia de aprendizaje:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/ea2.png')}
          resizeMode = 'stretch'
          />
          
            <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          Una vez terminada la actividad anterior, realiza la siguiente evidencia de aprendizaje:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/ea7.png')}
          resizeMode = 'stretch'
          />
          
          
            <View style={styles.titulo}> 
            <Text><H1>Ciclo de vida del producto</H1></Text>          
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
            Todos los días entran al mercado diferentes productos y servicios (De acuerdo con la agencia NIelsen son más de 300 los productos nuevos que se incorporan al mercado cada semana). Para las empresas, conocer la fase del ciclo en la que se encuentra su producto o servicio les permitirá diseñar la estrategia más eficaz para alargar su vida en un mercado cada vez más competitivo.{"\n"}{"\n"}
            El descubrimiento del modelo de ciclo de vida del producto se debe a Theodore Levitt, quien empleó el concepto por primera vez en un artículo de 1965 publicado en la Harvard Bussines Review. Según Levitt los productos, al igual que los seres vivos, nacen, crecen, se desarrollan y mueren, El ciclo de vida de los productos se compone de las siguientes fases:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:330}]}
          source={require('../../../images/Unidad2/fases.png')}
          resizeMode = 'stretch'
          />
          
          
          <Image
          style = {[styles.imagenes,{height:350}]}
          source={require('../../../images/Unidad2/grafica.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:380}]}
          source={require('../../../images/Unidad2/f1.png')}
          resizeMode = 'stretch'
          />
          
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            En resumen, en esta fase puede presentarse una rentabilidad negativa debido a que los costos y gastos necesarios para fabricar, lanzar y perfeccionar el producto son mayores en comparación con los ingresos que se obtienen por el volumen de ventas.
          </Text>  
          </View>     
          
          <Image
          style = {[styles.imagenes,{height:390}]}
          source={require('../../../images/Unidad2/f2.png')}
          resizeMode = 'stretch'
          />
          
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            En resumen, en esta fase se caracteriza por una rentabilidad positiva que debe reinvertirse, en su totalidad, para financiar el crecimiento y los esfuerzos técnicos, comerciales y de comunicación propios de esta fase.
          </Text>  
          </View>     
          
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/f3.png')}
          resizeMode = 'stretch'
          />
          
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            En resumen, la rentabilidad no es tan elevada como en la fase anterior, pero se producen excedentes de tesorería (ya que no hay necesidad de grandes inversiones), lo que permite el reparto de buenos dividendos, o invertir en otros productos que se hallen en las primeras fases de vida.
          </Text>  
          </View>     
          
          <Image
          style = {[styles.imagenes,{height:230}]}
          source={require('../../../images/Unidad2/f4.png')}
          resizeMode = 'stretch'
          />
          
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            En esta fase se deben tomar decisiones trascendentales: innovar o abandonar el producto.
          </Text>  
          </View>     
          
          <View style={styles.titulo}> 
            <Text><H1>Conclusiones del estudio de las fases</H1></Text>          
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
            Ubicar los productos en su fase es, sin duda, un paso indispensable para orientar la política de marketing de la empresa. Así, por ejemplo, sería absurdo realizar un gran esfuerzo para reducir el costo de un producto en fase de crecimiento, cuando en realidad es esta etapa los esfuerzos deben encaminarse a activar y atraer una demanda creciente.
          </Text>  
          </View>        
          </ScrollView>
        </Container>
      );
    }
  }
class dospuntocuatro extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Análisis de la demanda</H1></Text>          
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
           Con toda seguridad alguna vez has escuchado los términos demanda y oferta, pues son las plabras que más se utilizan en el mercado y en la economía, y por una buena razón: son las fuerzas que hacen que funcionen las economías de mercado.{"\n"}{"\n"}
           Estudiar la demanda es muy complejo, entérminos generales se puede decir que la demanda describe el comportamiento del consumidor y su análisis tiene como finalidad estimar la cantidad de producto que el mercado estará dispuesto a adquirir.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/2.4.png')}
          resizeMode = 'stretch'
          />
          
           <View style={styles.titulo}> 
            <Text><H1>Demanda: conceptos</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        <Image
          style = {[styles.imagenes,{height:240}]}
          source={require('../../../images/Unidad2/demanda.png')}
          resizeMode = 'stretch'
          />

           <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={180}
                       imageWidth={width}
                       imageHeight={180}>
                <Image style={{width:width, height:180}}
                       source={require('../../../images/Unidad2/demanda.png')}/>
            </ImageZoom>
            
          <Image
          style = {[styles.imagenes,{height:160}]}
          source={require('../../../images/Unidad2/leydemanda.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:230}]}
          source={require('../../../images/Unidad2/demandareal.png')}
          resizeMode = 'stretch'
          />
        <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
           Una vez que has revisado el tema de la demanda, ya cuentas con las bases para realizar la siguiente evidencia de aprendizaje:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/ea3.png')}
          resizeMode = 'stretch'
          />
          
          
          <View style={styles.titulo}> 
            <Text><H1>Áreas de mercado</H1></Text>          
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
          El mercado se puede dividir en:{"\n"}{"\n"}
          1.Mercado de bienes de consumo. Conformado por los mercados en donde se comercializan productos destinados a satisfacer las necesidades del cliente final.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/0.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          
          2.Mercado de bienes industriales. Son aquellos mercados en donde se comercializan productos principalmente para ser utilizados en la elaboración de otros bienes.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/00.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          El mercado se puede dividir en:{"\n"}{"\n"}
          3.Mercado de servicios. Se refiere al mercado de los bienes o productos de naturaleza principalmente intangible; este mercado lo compone el sector terciario de la economía de un país.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/000.png')}
          resizeMode = 'stretch'
          />
          
          
          <View style={styles.titulo}> 
            <Text><H1>Tipos de demanda</H1></Text>          
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
           De acuerdo con Baca (2006) los tipos de demanda son:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:310}]}
          source={require('../../../images/Unidad2/j.png')}
          resizeMode = 'stretch'
          />
 
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad2/jj.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:320}]}
          source={require('../../../images/Unidad2/jjj.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:320}]}
          source={require('../../../images/Unidad2/jjjj.png')}
          resizeMode = 'stretch'
          />
          
          
          
          <View style={styles.titulo}> 
            <Text><H1>Factores que afectan a la demanda</H1></Text>          
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
           La demanda está en función de varios factores, como por ejemplo: de la necesidad real que se tiene del bien o servicio, del precio, del nivel de ingreso de la población y de algunos otros factores que a continuación se explican con más detalle.{"\n"}{"\n"}
           Los economistas coinciden en que las principales razones por las que se desplaza la curva de la demanda son:{"\n"}{"\n"}
           1.Preferencias y gustos de los consumidores: Además de considerar el ámbito económico en el que actúa el consumidor, debe tenerse en cuenta el ámbito social en el que se desenvuelve, ya que muchas veces el comportamiento social influido por factores como la moda, la publicidad o simplemente la temporada del año.{"\n"}{"\n"}
           No es fácil hacer generalizaciones en cuanto a los gustos y las preferencias dado que son relativamente estables y algunas veces llegan a cambiar. Un cambio en los gustos y preferencias independiente al cambio de precio ocasiona un desplazamiento en la demanda.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/G1.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          Por ejemplo:{"\n"}{"\n"}
          La moda por una buena condición fisica puede aumentar la demanda de artículos deportivos{"\n"}{"\n"}
          Si un personaje famoso empieza a usar un determinado bien, muchas personas demandarán más de este artículo{"\n"}{"\n"}
          Hay consumidores que tienen un gusto especial por artículos antiguos o de colección{"\n"}{"\n"}
          Mayor demanda de medicinas en épocas de frío, entre otras razones porque algunos consumidores prefieren prevenir enfermedades.{"\n"}{"\n"}
          2.La información que poseen los consumidores: La informazión que tiene el consumidor acerca de un bien determinado, es otro de los factores que favorecen un desplazamiento de la curva de la demanda.{"\n"}{"\n"}
          Ejemplos:{"\n"}{"\n"}
          Si el consumidor tiene información acerca del peligro de fumar, es muy probable que disminuya la demanda de cigarros, y más aún con la nueva ley de no fumar en lugares cerrados y públicos{"\n"}{"\n"}
          Al conocer los efectos del colesterol es posible que el consumidor reduzca el consumo de huevo, camarones, carne de res y por ejemplo aumente el consumo de carne de pollo o de pescado
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/G2.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          3.Ingreso de los consumidores (poder adquisitivo): Un incremento en el ingreso incrementa la demanda de más bienes y ésta disminuye cuando disminuye el ingreso. A mayor ingreso existe un mayor consumo de automóviles, viajes, comprad e casas, asistencias a más espectáculos, más ropa, más vacaciones etc.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/G3.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
           En relación a los tipos de bienes que adquiere el consumidor en función de sus ingresos, se puede hacer la siguiente clasificación:{"\n"}{"\n"}
           a.Bienes Normales. Son aquellos bienes cuya demanda aumenta cuando aumenta el ingreso y disminuye cuando disminuye el ingreso. Los ejemplos más representativos son: la ropa, artículos perecederos (alimentos), asistencia a espectáculos, diversión, etc.{"\n"}{"\n"}
           b.Bienes inferiores: Son aquellos bienes cuya demanda disminuye cuando aumenta el ingreso y la demanda se incrementa cuando disminuye el ingreso. {"\n"}{"\n"}
           Algunos ejemplos son: {"\n"}{"\n"}
           Pan del dia anterior{"\n"}{"\n"}
           Alimentos próximos a caducar (fechas cortas){"\n"}{"\n"}
           Uso del transporte público{"\n"}{"\n"}
           Queso de puerco{"\n"}{"\n"}
           4.La población (número de posibles consumidores): La demanda se ve afectada por el tamaño de la población, si el número de consumidores aumenta entonces la demanda aumentará.{"\n"}{"\n"}
           Para poder tener un estimado de las demandas real y potencial se puede recurrir a la información que proporcionan algunas dependencias gubernamentales como el INEGI o el CONAPO, entre otros.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:330}]}
          source={require('../../../images/Unidad2/G4.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          5.Expectativas del consumidor: Las expectativas que tiene el consumidor pueden ser en cuanto a precio y en cuanto al ingreso:{"\n"}{"\n"}
          a.En cuanto a precio.Si se sabe que en el futuro el precio del bien X disminuirá, la demanda actual de ese bien disminuye, pero si se sabe que en el futuro habrá un aumento del precio entonces la demanda acutal se incrementa.{"\n"}{"\n"}
          Ejemplos:{"\n"}{"\n"}
          Computadoras, cámaras fotográficas y de video, artículos navideños después de temporada, etc.{"\n"}{"\n"}
          Si se tiene la expectativa de que el precio del dolár subirá, se incrementa la compra actual de dólares{"\n"}{"\n"}
          Los boletos del metro, cuando se sabía que iban a subir de 2 a 3 pesos, se incrementó la demanda y esto pasaba cada que subian de precio{"\n"}{"\n"}
          b.En cuanto a Ingreso. Si el consumidor tiene la expectativa de tener un mayor ingreso, definitivamente va a incrementar el consumo de algunos artículos y si por el contrario sabe que se quedará sin empleo, lo más seguro es que disminuya su consumo y si tiene tarjetas de crédito tal vez las cancele.{"\n"}{"\n"}
          6. Los precios de los bienes estrechamente relacionados: Al hablar de bienes estrechamente relacionados nos referimos a los bienes sustitutos y a los bienes complementarios:{"\n"}{"\n"}
          a. Bienes sustitutos. Son aquellos bienes que se pueden usar en lugar de otros, por tener algunas características similares.{"\n"}{"\n"}
          Ejemplos: mantequilla y margarina; té y café; malboro y viceroy entre muchos otros. *NOTA: Un aumento en el precio de un bien sustituto ocasiona la demanda del otro bien.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:360}]}
          source={require('../../../images/Unidad2/G5.png')}
          resizeMode = 'stretch'
          />
          
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
         b. Bienes complementarios. Un bien complementario es aquel que tiende a ser consumido o utilizado junto con otro bien. Ejemplos: impresoras y cartuchos o toner; café y azúcar; jamón y pan Bimbo; medias noches y salchichas; computadora y software; cepillo de dientes y pasta, entre muchos otros.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:380}]}
          source={require('../../../images/Unidad2/G6.png')}
          resizeMode = 'stretch'
          />
          
          
           <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
         *NOTA: Una reducción en el precio de alguno de ellos incrementa la demanda del otro, y de la misma manera un aumento en el precio de un bien complementario disminuye la demanda del otro.
          </Text>  
          </View>        
          
          
          
          <View style={styles.titulo}> 
            <Text><H1>Determinación y proyección de la demanda</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
        
        <Image
          style = {[styles.imagenes,{height:160}]}
          source={require('../../../images/Unidad2/u.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:430}]}
          source={require('../../../images/Unidad2/uu.png')}
          resizeMode = 'stretch'
          />
          
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/uuu.png')}
          resizeMode = 'stretch'
          />
        <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
          Para profundizar en el tema, lee el siguiente material:
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/L2.png')}
          resizeMode = 'stretch'
          />
          </ScrollView>
        </Container>
      );
    }
  }
  
class dospuntocinco extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Análisis de la oferta</H1></Text>          
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
             Mientras que la demanda describe el comportamiento de los consumidores, la oferta describe el comportamiento de los productores o empresarios.
      {"\n"}{"\n"}
            </Text>
          </View>
            <Image
            style = {[styles.imagenes,{height:400}]}
            source={require('../../../images/Unidad2/2.5.png')}
            resizeMode = 'stretch'
            />          
       
       <View style={styles.titulo}> 
            <Text><H1>Oferta: concepto</H1></Text>          
          </View>
          <View
            style={{
              borderBottomColor: '#eeeeee',
              borderBottomWidth: 1,
              marginLeft:10,
              marginRight:10,
            }}
          />
      
          <Image
          style = {[styles.imagenes,{height:280}]}
          source={require('../../../images/Unidad2/2.5.1.png')}
          resizeMode = 'stretch'
          />
      
      
       <View style={styles.titulo}> 
            <Text><H1>Tipos de oferta</H1></Text>          
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
      Principales tipos de oferta
      {"\n"}{"\n"}
      En relación con el número de oferentes se reconocen tres tipos:
      {"\n"}{"\n"}
       </Text>          
           </View>  
      
          <Image
          style = {[styles.imagenes,{height:310}]}
          source={require('../../../images/Unidad2/2.5.2.png')}
          resizeMode = 'stretch'
          />
      
        <View style={styles.titulo}> 
            <Text><H1> Análisis de la oferta: importaciones</H1></Text>          
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
      Con la globalización económica se promueve el comercio mundial y la especialización productiva, lo que permite aprovechar las capacidades
      de cada país para producir los bienes que mejor puede obtener o fabricar; por lo que cada nación exportará las mercancías con las que es 
      más competitiva e importará los productos que no puede producir o que produce en cantidades que no son suficientes para el consumo interno.
      {"\n"}{"\n"}
      En cuanto a la oferta se puede presentar el caso de que una empresa pretenda fabricar un producto que se importa parcialmente o que está 
      dentro de la lista de tratados o acuerdos comerciales, en tal caso es importante analizar la tendencia de las importaciones de ese producto.
      {"\n"}{"\n"}
       </Text>          
           </View>  
      
          <Image
          style = {[styles.imagenes,{height:220}]}
          source={require('../../../images/Unidad2/1a.png')}
          resizeMode = 'stretch'
          />
      <Image
          style = {[styles.imagenes,{height:170}]}
          source={require('../../../images/Unidad2/2a.png')}
          resizeMode = 'stretch'
          />
      
      <View style={styles.cuerpo}>
            <Text style={styles.letras}>
      Según examen estadístico de comercio mundial publicado por la Organización Mundial de Comercio (OMC, 2016), México se encuentra en el lugar
      12 de lista de los más grandes importadores mundiales de mercancías; el primer lugar corresponde a China, el segundo a Estados Unidos, el 
      tercero a Alemania y el cuarto lugar lo tiene Japón. En el caso de México el 50.2% de las importaciones provienen de Estados Unidos; el 14.7% 
      proviene de China; el 4.7% de Japón y del resto de los países (Corea del Sur, Alemania, Canadá, Malasia, Italia, Taiwán y España, por mencionar
      los más importantes) se importa el 30.4% restante.
      {"\n"}{"\n"}
      Las importaciones son principalmente de bienes intermedios, es decir productos que aún deben pasar por procesos para su uso o consumo, siendo 
      la industria automotriz una de las principales importadoras de este tipo de productos. 
      Fuente: https://globalconnections.hsbc.com/mexico/es/articles/principales-importaciones-de-mexico
      {"\n"}{"\n"}
      Fuente: https://www.gob.mx/cms/uploads/attachment/file/207394/II_Comercio_exterior_-_marzo_2017.pdf 
      {"\n"}{"\n"}
      Conoce más acerca de las mercancías que importa México
      {"\n"}{"\n"}
      http://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?accion=consultarCuadro&idCuadro=CE49
       </Text>          
           </View>  
      
      <View style={styles.titulo}> 
            <Text><H1> Exportaciones y otros conceptos</H1></Text>          
          </View>
          <View
            style={{
              borderBottomColor: '#eeeeee',
              borderBottomWidth: 1,
              marginLeft:10,
              marginRight:10,
            }}
          />
        <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/33a.png')}
          resizeMode = 'stretch'
          />
      
        <View style={styles.cuerpo}>
            <Text style={styles.letras}>
      Según examen estadístico de comercio mundial publicado por la Organización Mundial de Comercio (OMC, 2016), México ocupa el lugar 13 
      de los principales países exportadores de mercancías; su presencia en los mercados globales se debe en gran medida a los tratados comerciales,
      su situación geográfica y la excelencia en su manufactura. 
      {"\n"}{"\n"}
       </Text>          
           </View>  
      
          <Image
          style = {[styles.imagenes,{height:160}]}
          source={require('../../../images/Unidad2/4.png')}
          resizeMode = 'stretch'
          />
      
         <Image
          style = {[styles.imagenes,{height:180}]}
          source={require('../../../images/Unidad2/44a.png')}
          resizeMode = 'stretch'
          />
      
         <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad2/3.png')}
          resizeMode = 'stretch'
          />
     
    <View style={styles.cuerpo}>
    <Text style={styles.letras}>
    ¡El Banco Nacional de Comercio Exterior, S.N.C (Bancomext) financia a las empresas exportadoras mexicanas! Obtén más información: 
    http://www.bancomext.com/empresas-que-apoyamos/exportadores
    {"\n"}{"\n"}
    </Text>          
    </View>  
           
     <View style={styles.titulo}> 
         <Text><H1>Análisis de la competencia (FODA), determinación y proyección de la oferta</H1></Text>          
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
    El análisis DAFO o también conocido como la matriz FODA tiene su origen en el método de análisis de la competencia conocido como SWOT
    (Strengths, Weakness, Opportunities, Threats). Esta herramienta se utiliza para analizar las Fortalezas, Oportunidades, Debilidades y
    Amenazas de una empresa o producto, en el último caso se recomienda hacerse con al menos tres de los principales competidores. Para 
    lo cual debemos identificar quiénes son nuestros competidores tanto directos como indirectos:
    {"\n"}{"\n"}
    </Text>          
    </View>  
    
     <Image
          style = {[styles.imagenes,{height:240}]}
          source={require('../../../images/Unidad2/22a.png')}
          resizeMode = 'stretch'
          />
    
    <View style={styles.cuerpo}>
    <Text style={styles.letras}>
    ¿Qué información debemos conocer de los productos o servicios de la competencia?
    {"\n"}{"\n"}
    </Text>          
    </View>  
     <Image
          style = {[styles.imagenes,{height:410}]}
          source={require('../../../images/Unidad2/foda.png')}
          resizeMode = 'stretch'
          />
      
    <View style={styles.cuerpo}>
    <Text style={styles.letras}>
    Es de gran valor toda la información que se tenga acerca de la competencia; de ser posible hay que identificar tanto las estrategias
    que les han funcionado como las que han fracasado. Entre más se conozca a la competencia se tendrán mayores probabilidades de diseñar
    estrategias exitosas y tomar mejores decisiones.
    {"\n"}{"\n"}
      Proyección de la oferta
    {"\n"}{"\n"}
      Al igual que en la demanda, es necesario estimar la situación futura de la oferta. Para lo cual se usarán los datos históricos, 
      se analizarán sus perspectivas y la facilidad o restricciones que se presentan a fin tener datos estadísticos más precisos.
    {"\n"}{"\n"}
      Las limitantes de la oferta futura pueden deberse a las instalaciones y equipamiento, el aprovisionamiento de las materias primas
      principales, las condiciones institucionales, económicas, financieras, los nuevos proyectos, los permisos en trámite etc.
    {"\n"}{"\n"}
      Al realizar la investigación de la oferta actual, en ocasiones se logra identificar a inversionistas que también pretenden 
      introducirse al mercado estudiado, por lo tanto, éstos se convierten en potenciales oferentes y deben ser considerados al 
      cuantificar la oferta futura.
    {"\n"}{"\n"}
      Los métodos de proyección de la oferta dependen, al igual que en el caso de la demanda, de la información disponible. Por ello
      se usarán los métodos estadísticos que mejor se adapten, después de analizar las restricciones (Nacional Financiera, 1998).
    </Text>          
    </View>  
  
    
        </ScrollView>
        </Container>
      );
    }
  }
class dospuntoseis extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Análisis de los precios</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
    
    <Image
          style = {[styles.imagenes,{height:240}]}
          source={require('../../../images/Unidad2/2.6.png')}
          resizeMode = 'stretch'
          />
    
        <View style={styles.cuerpo}>         
          <Text style={styles.letras}>
            Dado su efecto e impacto en el mercado las decisiones sobre precios son, probablemente, las más importantes para la vida de 
      una empresa. Tradicionalmente el precio influye en la conducta del comprador, y muchas veces opera como principal determinante
      en la decisión de compra. El precio sigue siendo uno de los elementos más importantes que determinan la participación en el 
      mercado y la rentabilidad de una empresa. Una de las preguntas más frecuentes que se hace todo empresario es ¿en cuánto se 
      debe vender el producto? 
            {"\n"}{"\n"}
          </Text>  
          </View>        
         
        
     <View style={styles.titulo}> 
            <Text><H1>Precio: concepto</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        /> 
    <Image
          style = {[styles.imagenes,{height:330}]}
          source={require('../../../images/Unidad2/2.6.1.png')}
          resizeMode = 'stretch'
          />
      
       <View style={styles.titulo}> 
            <Text><H1>Clasificación de precios</H1></Text>          
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
      De acuerdo con Baca (2006) los precios se pueden clasificar en:
        {"\n"}{"\n"}
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:520}]}
          source={require('../../../images/Unidad2/2.6.2.png')}
          resizeMode = 'stretch'
          />
      
        <View style={styles.titulo}> 
            <Text><H1>Determinación y proyección del precio</H1></Text>          
          </View>
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />   
    
    
      <Image
          style = {[styles.imagenes,{height:90}]}
          source={require('../../../images/Unidad2/11a.png')}
          resizeMode = 'stretch'
          />
    
     <Image
          style = {[styles.imagenes,{height:170}]}
          source={require('../../../images/Unidad2/222.png')}
          resizeMode = 'stretch'
          />
    
    <Image
          style = {[styles.imagenes,{height:110}]}
          source={require('../../../images/Unidad2/333.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
      Nota: en la unidad V abordaremos con más detalle cómo se calcula el precio considerando los costos y gastos más la utilidad deseada.
        {"\n"}{"\n"}
            </Text>
          </View>
        
    <Image
          style = {[styles.imagenes,{height:230}]}
          source={require('../../../images/Unidad2/444.png')}
          resizeMode = 'stretch'
          />
    
          </ScrollView>
        </Container>
      );
    }
  }
class dospuntosiete extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
          <Text><H1>Análisis de la comercialización</H1></Text>          
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
           La comercialización es un aspecto vital para las empresas, es una decisión estratégica. De nada servirá elaborar el mejor producto
       o proporcionar el mejor servicio a un precio competitivo, si no se cuenta con los medios para hacerlo llegar a los consumidores en
       forma eficiente y eficaz.
       {"\n"}{"\n"}
          </Text>
        </View>                  
        <Image
          style = {[styles.imagenes,{height:370}]}
          source={require('../../../images/Unidad2/paraelvideo.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Cadena distribución coca cola 
      {"\n"}{"\n"}
      Fuente: https://www.youtube.com/watch?v=-O1O1Fo5cek&index=16&list=LL5xM3FX_4F2jaohqjS6mSBQ
            </Text>
          </View>
          <View style={styles.titulo}> 
          <Text><H1>Importancia de la comercialización</H1></Text>          
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
           A través de la comercialización la empresa dirige todos los esfuerzos para satisfacer a sus clientes y a cambio obtener rentabilidad;
       la forma en que se lleva a cabo la comercialización definirá en gran medida la rentabilidad o no de la empresa, de ahí que las empresas
       se enfocan en manejar la comercialización con mucho cuidado.
       {"\n"}{"\n"}
          </Text>
        </View>                  
        <Image
          style = {[styles.imagenes,{height:370}]}
          source={require('../../../images/Unidad2/2.7.1.png')}
          resizeMode = 'stretch'
          />

      <View style={styles.titulo}> 
          <Text><H1>Canales de distribución</H1></Text>          
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
         Un canal de distribución es la ruta que toma un producto para pasar del productor a los consumidores finales, deteniéndose
         en varios puntos de esa trayectoria. En cada intermediario o punto en el que se detenga esa trayectoria existe un pago a 
         transacción, además de un intercambio de información. El productor siempre tratará de elegir el canal más ventajoso desde 
         todos los puntos de vista (Baca, 2006)
       {"\n"}{"\n"}
         Se denomina canal de comercialización a los agentes que se involucran para llevar el producto al consumidor (Nacional Financiera, 2001)
       {"\n"}{"\n"}
          </Text>
        </View>                  
        <Image
          style = {[styles.imagenes,{height:240}]}
          source={require('../../../images/Unidad2/acanal.png')}
          resizeMode = 'stretch'
          />
    
      <Image
          style = {[styles.imagenes,{height:340}]}
          source={require('../../../images/Unidad2/acanal2.png')}
          resizeMode = 'stretch'
          />
    
      <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/b.png')}
          resizeMode = 'stretch'
          />
      
       <Image
          style = {[styles.imagenes,{height:440}]}
          source={require('../../../images/Unidad2/c.png')}
          resizeMode = 'stretch'
          />
      
      <Image
          style = {[styles.imagenes,{height:170}]}
          source={require('../../../images/Unidad2/1.3.png')}
          resizeMode = 'stretch'
          />
      
     <View style={styles.titulo}> 
          <Text><H1>Factores a considerar en la selección de un canal de comercialización</H1></Text>          
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
           La decisión sobre el canal o la combinación de canales de distribución más adecuado(s) para la empresa, está en función de sus objetivos en cuanto a:  
       {"\n"}{"\n"}

          </Text>
        </View>                  
        <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/2.7.3.png')}
          resizeMode = 'stretch'
          />
      
     <View style={styles.titulo}> 
          <Text><H1>Estrategias de promoción y publicidad</H1></Text>          
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
      La publicidad es toda transmisión de información masiva, impersonal (se dirige a un público anónimo no identificado),
      unilateral (no hay interrelación entre el emisor y el receptor del mensaje) a través de un medio de comunicación dirigida
      a un público objetivo con la finalidad de estimular la demanda de un producto o de cambiar la opinión o comportamiento 
      del consumidor.
      {"\n"}{"\n"}
          </Text>
        </View>         
  
    <Image
          style = {[styles.imagenes,{height:380}]}
          source={require('../../../images/Unidad2/1111.png')}
          resizeMode = 'stretch'
          />
  
  
   <View style={styles.cuerpo}>            
          <Text style={styles.letras}>
      Para desarrollar un programa de publicidad se deben establecer objetivos claros y desarrollar una estrategia de 
      posicionamiento y marketing. El diseño de la estrategia publicitaria incluye una serie de decisiones tales como:
       {"\n"}{"\n"}
          </Text>
        </View>   

    <Image
          style = {[styles.imagenes,{height:260}]}
          source={require('../../../images/Unidad2/2222.png')}
          resizeMode = 'stretch'
          />

     <View style={styles.cuerpo}>            
          <Text style={styles.letras}>
       En el siguiente cuadro encontrarás información puntual acerca de la promoción y la publicidad.
       {"\n"}{"\n"}
          </Text>
        </View>  
    <Image
          style = {[styles.imagenes,{height:140}]}
          source={require('../../../images/Unidad2/publi.png')}
          resizeMode = 'stretch'
          />

      
    <View style={styles.titulo}> 
          <Text><H1>Garantía del producto</H1></Text>          
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
       Existen dos tipos de garantías: las garantías legales, a las que se tienen derecho por ley y que se puede ejercitar
       por un motivo concreto (que el producto no se ajusta a la descripción hecha por el vendedor o no posea las cualidades
       que el vendedor presentó al cliente); y las garantías comerciales, que son las que ofrece el comerciante y son adicionales
       a las garantías legales.
       {"\n"}{"\n"}
          </Text>
        </View>  
    <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad2/2.7.5.png')}
          resizeMode = 'stretch'
          />

      <View style={styles.cuerpo}>            
          <Text style={styles.letras}>
       Una vez realizada la investigación o el estudio de mercado, ahora sí se tendrá información suficiente para saber qué tantas 
       posibilidades tiene el producto o el servicio de ser aceptado y vendido en el mercado; si el escenario es pesimista, no hay
       que desanimarse, hay que replantear la idea y en un momento dado abandonarla e identificar otra idea de producto o servicio;
       en el caso de que el escenario (previamente analizado y evaluado) sea optimista, entonces podemos decir que hay factibilidad
       en el estudio de mercado y se deberá continuar con el estudio técnico, mismo que abordaremos en la siguiente unidad temática.
       {"\n"}{"\n"}
        Para concluir esta unidad temática, es necesario que realices las evidencia de aprendizaje: 
       {"\n"}{"\n"} 
          </Text>
        </View>  
    <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/EA2.7.png')}
          resizeMode = 'stretch'
          />
    <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad2/EA2.8.png')}
          resizeMode = 'stretch'
          />
     
      
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
    }
  });
  
  export default TabNavigator({
    '2.1': { screen: dospuntouno },
    '2.2': { screen: dospuntodos },
    '2.3': { screen: dospuntotres },
    '2.4': { screen: dospuntocuatro },
  '2.5': { screen: dospuntocinco },
    '2.6': { screen: dospuntoseis },
  '2.7': { screen: dospuntosiete },
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