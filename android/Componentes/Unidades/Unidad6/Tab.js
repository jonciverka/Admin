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

  class seispuntouno extends React.Component {
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
          <Text><H1>Análisis de los estados financieros</H1></Text>          
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
            La contabilidad registra los hechos (operaciones) de la organización, dicha información se resume en los 
            estados financieros; éstos deben analizarse en cada una de sus partidas (cuentas) para identificar tanto 
            áreas de oportunidad (debilidades) como áreas de desarrollo (fortalezas que pueden potencializarse aún más). El 
            análisis financiero proporciona un panorama de la situación financiera actual de la empresa y es el 
            sustento para la planeación y la toma de decisiones financieras y administrativas.{"\n"}{"\n"}
          
            García (2006:82) define el análisis de los estados financieros “como el uso de ciertas herramientas y 
            técnicas que se aplican a los reportes y estados de índole financiera para obtener algunas medias y 
            relaciones que facilitan la toma de decisiones”. Estas decisiones pueden estar encaminadas a corregir, 
            modificar, consolidar o mejorar el rumbo financiero de la empresa.   
            {"\n"}{"\n"}
            En el siguiente esquema se muestra en qué consiste el análisis financiero:   
          </Text>          
        </View>
          <Image
          style = {[styles.imagenes,{height:580}]}
          source={require('../../../images/Unidad6/6.1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Determinación de los flujos netos de efectivo (FNE) del proyecto</H1></Text>          
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
            Lo que se busca al elaborar el flujo de caja o flujo de efectivo de un proyecto es estimar los ingresos y 
            los egresos en efectivo que se producirán en un horizonte de tiempo. Los flujos netos de efectivo (FNE) 
            se obtienen al restar los egresos de los ingresos en efectivo que se esperan recibir durante la vida útil 
            del proyecto. Para efectos de esta unidad de aprendizaje el horizonte de tiempo del proyecto se considerará 
            de cinco años.{"\n"}{"\n"}

            De acuerdo con Méndez Lozano (2012) todo proyecto se define para un horizonte temporal el cual está conformado 
            por tres periodos:  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad6/6.1.1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
              En términos generales, la información del flujo de efectivo puede presentarse en un formato como el siguiente:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:190}]}
          source={require('../../../images/Unidad6/tabla1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
              Nota: La proyección de las ventas se hace con base en los objetivos de la empresa, en este ejemplo se 
              está contemplando un incremento anual de las ventas del 3% con respecto al año anterior; también deberás 
              consideras que los costos y gastos de operación aumentan, en por lo menos el porcentaje de la inflación 
              (de acuerdo con las perspectivas de inflación para los próximos 5 años).{"\n"}{"\n"}

              El monto de los rubros señalados con * : gastos financieros y pagos a capital, se toman de la tabla de 
              amortización del financiamiento (en el caso que lo hubiera), en tanto que el rubro pago de impuestos se 
              toma del estado de resultados proforma.  
            </Text>
            <Card>
            <CardItem>
              <Body>
              <Text style={styles.letras}>
                Determinar los flujos netos de efectivo (FNE) es esencial para poder realizar la 
                evaluación financiera de todo proyecto. 
                </Text>
              </Body>
            </CardItem>
            </Card>
            <Text style={styles.letras}>
              Después de leer el tema ya cuentas con los conocimientos necesarios para elaborar la 
              siguiente evidencia de aprendeizaje: 
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seistres.pdf')}>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI3.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
        </ScrollView>
        </Container>
      );
    }
  }
  class seispuntodos extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Determinación de la tasa mínima de aceptación de rendimiento del proyecto (TMAR)</H1></Text>          
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
              La tasa mínima de aceptación del proyecto (TMAR), la tasa de rendimiento mínima aceptable (TREMA) o 
              costo de capital hace referencia al miso concepto.
            </Text>
          </View>
            <Image
            style = {[styles.imagenes,{height:100}]}
            source={require('../../../images/Unidad6/6.2.png')}
            resizeMode = 'stretch'
            />          
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              El costo de capital: es lo que le cuesta a la empresa hacer uso del dinero ajeno (financiamiento). 
              El dinero tiene un costo, y, por tanto, toda la organización trata de que el rendimiento del dinero sea 
              el mayor posible con respecto al costo que paga por conseguirlo, pues en la medida en que se logre mayor 
              diferencia entre el costo y el rendimiento, se aumenta el valor de la empresa.{"\n"}{"\n"}

              De acuerdo con Hernández (2001) y Baca (2012) se entiende por costo de capital, al interés promedio ponderado 
              por el uso del dinero, proveniente de las distintas fuentes de financiamiento.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:220}]}
          source={require('../../../images/Unidad6/como.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Ejemplo del cálculo de la TMAR cuando un capital proviene de varias fuentes: Para llevar a cabo un proyecto, se 
              requiere un capital de $200,000. De los cuales los inversionistas aportan 50%, otras empresas aportan 25%, y 
              una institución financiera aporta el 25% restante. Para este ejemplo, considerar una inflación promedio 
              del 4% y un premio al riesgo para los inversionistas del 10% y para otras empresas del 12%.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad6/p1.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad6/tabla2.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad6/p2.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad6/tabla3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Ahora ya sabes qué es el costo de capital TMAR o TREMA, es momento de realizar la siguiente 
              evidencia de aprendeizaje:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seiscuatro.pdf')}>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI4.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
        </ScrollView>
        </Container>
      );
    }
  }
  class seispuntotres extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Métodos financieros para la evaluación del proyecto</H1></Text>          
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
            La evaluación económico – financiera de un proyecto puede hacerse desde métodos de evaluación diferentes: 
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad6/6.3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Periodo de recuperación de la inversión (PRI)</H1></Text>          
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
            González (2009) define el periodo de recuperación de la inversión como la técnica por medio de la cual 
            se calcula el tiempo requerido para que una empresa recupere la inversión inicial del proyecto, basándose 
            en los flujos operativos positivos del proyecto.{"\n"}{"\n"}

            Ejemplo: se realiza una inversión de $1,000 y se esperan los siguientes flujos netos de efectivo para los 
            próximos cinco años: 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad6/tabla4.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Recuerda que el flujo neto de efectivo (FNE) se refiere solo a las entradas y salidas de dinero en efectivo 
            y se obtiene restando los egresos totales a los ingresos totales (en la tabla anterior ya te están dando ese 
            resultado); el flujo acumulado para el primer año se obtuvo así -1,000 + 250 = -350, para el segundo año es 
            -350 + 300 = -50 y así sucesivamente.{"\n"}{"\n"} 

            Para calcular el periodo de recuperación de la inversión podemos utilizar la siguiente fórmula: 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad6/formula.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/ventajas6.3.1.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/desventajas6.3.1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Aplica tus conocimientos y realiza la siguiente evidencia de aprendeizaje:
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seiscinco.pdf')}>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI5.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <View style={styles.titulo}> 
            <Text><H1>Métodos contables</H1></Text>          
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
            En cuanto a los índices relacionados con la rentabilidad están los índices de rentabilidad.  
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Índices de rentabilidad</H1></Text>          
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
            La rentabilidad se define como la capacidad que tiene la empresa para generar rendimiento sobre las ventas, 
            sobre los activos totales y sobre el patrimonio (capital contable). Los índices de rentabilidad más usados son:  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad6/margen.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Indica el porcentaje de utilidad en relación con las ventas, en este ejemplo, también se puede leer de la 
            siguiente manera: por cada peso que ingresa a la empresa por concepto de ventas 7.87 centavos son de utilidad.   
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad6/RAT.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/form4.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Indica el porcentaje de utilidad que se obtiene con el empleo de todos los recursos (activos) 
            propios y ajenos de la empresa.    
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad6/rendimiento.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/form5.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
            Mide el rendimiento que obtiene una empresa sobre el capital de los accionistas. 
            El ejemplo se puede interpretar: por cada peso invertido en patrimonio (capital contable) se 
            está obteniendo 37 centavos de la utilidad.  
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Métodos que consideran el valor del dinero en el tiempo</H1></Text>          
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
            La utilización de métodos para la evaluación de proyectos de inversión permiten evaluar alternativas y 
            seleccionar la más recomendable y al mismo tiempo, rechazar aquellas que no satisfacen los objetivos de 
            rendimiento esperados por la empresa. Los métodos para la evaluación de proyectos que toman en cuenta el 
            valor del dinero en el tiempo son:   
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad6/6.3.3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Indicadores financieros</H1></Text>          
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
            Los indicadores financieros son utilizados para mostrar las relaciones que existen entre las 
            diferentes cuentas de los estados financieros (estado de situación financiera y estado de resultados); 
            y sirven para analizar la rentabilidad, liquidez, nivel de endeudamiento, eficiencia en la utilización y 
            administración de activos y valuación de inversiones.  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:350}]}
          source={require('../../../images/Unidad6/6.3.4.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Razones financieras</H1></Text>          
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
            Matemáticamente se denomina "razón" a la relación que existe entre dos cantidades de la misma especie. 
            Las razones o índices (ratios en el idioma inglés), se ocupan frecuentemente en la vida diaria, 
            por ejemplo, algunas personas decidirán comprar un automóvil tomando en cuenta el recorrido por litro de 
            gasolina, es decir, utilizan índices para valorar un desempeño específico.{"\n"}{"\n"}

            De igual forma, los índices o razones financieras se utilizan para ponderar y evaluar el desempeño 
            operativo de las empresas al buscar e interpretar las relaciones que existen entre las principales 
            partidas (cuentas) de los estados financieros (estado de posición financiera y estado de resultados).{"\n"}{"\n"}

            El análisis financiero por el método de razones simples es de gran apoyo para las empresas, permite 
            identificar probables puntos débiles (principales problemas) en el negocio y adicionalmente, puede utilizarse 
            también para determinar probabilidades y tendencias.{"\n"}{"\n"}

            En cuanto a razones simples, para efectos de este curso, manejaremos los siguientes grupos: índices de 
            rentabilidad, índices de liquidez, índices de endeudamiento, índices de rotación o administración de activos e 
            índices para la valuación de las inversiones.{"\n"}{"\n"}    
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:350}]}
          source={require('../../../images/Unidad6/6.3.4.repite.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
              Para profundizar en este tema, te invitamos a leer el siguiente material:  
            </Text>
          </View>
          <TouchableHighlight>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/L6.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <View style={styles.cuerpo}>
            <Text style={styles.letras}>
              Después de haber leído el material anterior realiza la siguiente evidencia de aprendeizaje:  
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seisdos.pdf')}>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI2.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
          </ScrollView>
        </Container>
      );
    }
  }
  class seispuntocuatro extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Punto de equilibrio</H1></Text>          
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
            Es una herramienta de análisis y control financiero que muestra la relación entre el volumen de ventas
            y la rentabilidad operativa.{"\n"}{"\n"}

            El punto de equilibrio operativo se encuentra cuando los ingresos generados a partir de las ventas son 
            iguales a los costos operativos totales (I = C.T).{"\n"}{"\n"}

            Al calcular el punto de equilibrio operativo, estamos estimando cuántas unidades se necesitan 
            producir y vender para no ganar y tampoco perder.{"\n"}{"\n"}
          </Text>
        </View>
        <View style={styles.titulo}> 
          <Text><H1>Representación gráfica del punto de equilibrio:</H1></Text>          
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
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad6/5.2.4.png')}
          resizeMode = 'stretch'
        />
          <View style={styles.titulo}> 
            <Text><H1>Conceptos básicos:</H1></Text>          
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
            style = {[styles.imagenes,{height:420}]}
            source={require('../../../images/Unidad6/conceptos.png')}
            resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Fórmulas para calcular el punto de equilibrio en número de unidades (cantidad de productos o de servicios):
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:90}]}
          source={require('../../../images/Unidad6/Formula1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Fórmulas para calcular el punto de equilibrio en unidades monetarias (dinero):
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:110}]}
          source={require('../../../images/Unidad6/Formula2.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Otra forma más sencilla de obtener el punto de equilibrio en unidades monetarias (dinero) es:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad6/Formula3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Donde:{"\n"}{"\n"}
              C.F = Costos fijos{"\n"}{"\n"}
              M.C = margen de contribución, que se obtiene así: P.V.U - C.V.U{"\n"}{"\n"}
              P.V.U = Precio de venta unitario{"\n"}{"\n"}
              C.V.U = Costo de venta unitario{"\n"}{"\n"}
              Una vez concluida la lectura de este tema, realiza la siguiente evidencia de aprendizaje: 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad6/VI1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Punto de equilibrio</H1></Text>          
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
              Los indicadores económicos son una serie de datos que se representan en valores estadísticos y 
              proporcionan información sobre de la situación económica de un país; se calculan cada determinado 
              tiempo (diario, quincenal, mensual, trimestral, etc.); su correcta evaluación, interpretación e 
              interrelación, por parte de los empresarios, es fundamental para la realización de pronósticos y en 
              general para la toma de decisiones económico-financieras.{"\n"}{"\n"}

              Algunos de los indicadores económicos más importantes son: 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad6/6.4.1.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Tasa interna de Rendimiento (TIR)</H1></Text>          
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
              Es el indicador que refleja la diferencia entre los beneficios actualizados y los costos actualizados; 
              se mide en porcentaje y se define como la tasa de descuento que iguala el valor de los beneficios con el 
              valor de todos los costos. En otras palabras, es una tasa de descuento que hace posible igualar el valor 
              presente de los ingresos con el valor presente de los egresos, es decir:
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Ecuación 1</H1></Text>          
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
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad6/vpi.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Se le llama tasa interna de rendimiento porque supone que el dinero que se gana año con año se 
              reinvierte en su totalidad. Es decir, se trata de la tasa de rendimiento generada en su totalidad 
              en el interior de la empresa por medio de la reinversión.{"\n"}{"\n"}

              Es claro que si el VPN=0 sólo se estará ganando la tasa de descuento aplicada, es decir la TMAR, y 
              un proyecto debería aceptarse con este criterio, ya que se está ganando lo mínimo fijado como 
              rendimiento.{"\n"}{"\n"}

              La TIR indica cuál es el valor real del rendimiento del dinero en una inversión y se puede obtener de al menos 
              dos formas: 
            </Text>
          </View>
           <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/ab.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              El criterio de aceptación por el método de la TIR establece que si ésta es mayor que la TMAR, 
              se acepta la inversión; es decir, si el rendimiento de la empresa es mayor que el mínimo fijado como 
              aceptable, la inversión es económicamente rentable de lo contrario se rechazaría el proyecto.{"\n"}{"\n"}

              Para calcular la TIR se toman como base los flujos de efectivo, éstos pueden ser cantidades iguales 
              para los diferentes periodos, a los cuales se les llama anualidades; o bien pueden ser cantidades 
              desiguales en cada uno de los periodos a las que se les denomina cantidades únicas. En ambos casos 
              se puede utilizar el mismo procedimiento.{"\n"}{"\n"} 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:350}]}
          source={require('../../../images/Unidad6/comoTIR.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Ejemplo: determinar la TIR para un proyecto con una vida de 3 años; sabemos que el valor de la inversión 
              es de $10,000 y se espera recibir $5,000 en el primer año; $5,000 en el segundo año y $3,000 en el tercer 
              año. Para este ejemplo el valor de la TMAR es del 15%.
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Datos del proyecto</H1></Text>          
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
          style = {[styles.imagenes,{height:140}]}
          source={require('../../../images/Unidad6/tabla5.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:120}]}
          source={require('../../../images/Unidad6/p1.6.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:130}]}
          source={require('../../../images/Unidad6/tabla6.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              NOTAS: sobre la construcción de la tabla 21{"\n"}{"\n"}
              
              El valor de la inversión (AÑO 0) está en negativo dado que corresponde a una salida de efectivo; 
              los demás flujos de efectivo son positivos porque son una entrada de efectivo.{"\n"}{"\n"}

              Todos los FNE deben estar expresados a valor presente; el único que ya está a valor presente es el monto 
              de la inversión, los FNE que se esperan recibir en los años 1,2 y 3 deben traerse al presente por lo que 
              se usa el VAN o VPN.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad6/p2.6.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/Unidad6/tir.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/otra.png')}
          resizeMode = 'stretch'
          />
           <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Para una mayor comprensión de este tema resuelve la siguiente evidencia de aprendeizaje: 
            </Text>
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seissiete.pdf')}>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI7.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <View style={styles.titulo}> 
            <Text><H1>Valor Presente Neto (VPN) o Valor Actual Neto (VAN)</H1></Text>          
          </View>
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              El VAN se define como el valor monetario que resulta de restar la suma de los flujos descontados 
              (flujos de efectivo del proyecto a valor presente) a la inversión inicial.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:230}]}
          source={require('../../../images/Unidad6/6.4.3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Ejemplo, para el proyecto “A” se requiere una inversión de $42,000 y se esperan recibir flujos de 
              efectivo de 28,000 para el primer año; 12,000, para el segundo año y 10,000 para cada uno de los 
              años 3,4 y 5. Se pide determinar el VAN o VPN para este proyecto.
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Datos correspondientes al Proyecto “A”</H1></Text>          
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
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/tabla.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Para facilitar la comprensión d este método, nos apoyaremos en la línea de flujo de efectivo (Figura 43) 
              colocando los datos del proyecto "A"; la inversión inicial es una salida de dinero, es por eso que se 
              representa como –$42,000; los flujos de efectivo para los años del 1 al 5 corresponden a los ingresos que 
              se estiman tener año con año.
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:90}]}
          source={require('../../../images/Unidad6/inversion.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Dado que la inversión se va a realizar en el presente (año 0), ya está expresada a valor presente o valor 
              actual, es decir el valor actual de la inve0rsión es de 42,000; sin embargo, estarás de acuerdo, que los 
              flujos de efectivo (ingresos) están expresados en valor futuro (porque es lo que se estima recibir en los 
              años del 1 al 5) entonces, lo que procede es traerlos a su valor presente para lo cual utilizamos la 
              siguiente fórmula:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:440}]}
          source={require('../../../images/Unidad6/form.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/1.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/año2.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:350}]}
          source={require('../../../images/Unidad6/3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Estos datos se pueden apreciar con más claridad en la siguiente figura:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/linea.png')}
          resizeMode = 'cover'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Por definición el VAN es el valor monetario que resulta de restar la suma de los flujos descontados 
              (flujos de efectivo del proyecto a valor presente) a la inversión inicial. 
            </Text>
          </View>
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Por lo tanto, el VAN del proyecto “A” es: ( - 42,000 + 55,924 = 13,924)
            </Text>
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
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/Unidad6/VAN.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Algunas consideraciones acerca del método del VAN</H1></Text>          
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
              Cuando se hacen cálculos de pasar, en forma equivalente, dinero del presente al futuro, se utiliza 
              una tasa de interés o de crecimiento del dinero; pero cuando se quieren pasar cantidades futuras al 
              presente, como en este caso, se usa una tasa de descuento, llamada así porque descuenta el valor del 
              dinero en el futuro a su equivalente en el presente, y a los flujos traídos al tiempo cero se les llama 
              flujos descontados.{"\n"}{"\n"}

              La definición ya tiene sentido. Sumar los flujos descontados en el presente y restar la inversión inicial 
              equivale a comparar todas las ganancias esperadas contra todos los desembolsos necesarios para producir esas 
              ganancias, en términos de su valor equivalente en este momento o tiempo cero. Es claro que para aceptar un 
              proyecto las ganancias deberán ser mayores que los desembolsos, lo cual dará por resultado que el VAN o VPN 
              sea mayor que cero. Para calcular el VPN se utiliza el costo de capital o TMAR (Tasa Mínima Aceptable de 
              Rendimiento).{"\n"}{"\n"}

              Cuando se emplea una tasa de descuento adecuada, el VAN es un criterio de rentabilidad muy confiable para 
              comparar propuestas de inversión.{"\n"}{"\n"}

              Pon a prueba tus conocimientos sobre el tema y realiza la siguiente evidencia de aprendizaje: 
            </Text>
          </View>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.dropbox.com/sh/rtqydo779cxsvfw/AADPcEYtudH0ojGMzmgsCihGa/Unidad6?dl=0&preview=seisseis.pdf')}>>
          <Image
            style = {[styles.imagenes,{height:70}]}
            source={require('../../../images/Unidad6/VI6.png')}
            resizeMode = 'stretch'
          />
          </TouchableHighlight>
          <View style={styles.titulo}> 
            <Text><H1>Costo-beneficio</H1></Text>          
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
              De acuerdo con Aching (2005) el método beneficio costo es un método complementario. Utilizado generalmente 
              para evaluar inversiones del gobierno central, gobiernos locales y regionales, además de su uso en el campo 
              de los negocios para determinar la viabilidad de los proyectos con base en la razón de los beneficios a los 
              costos asociados al proyecto. Asimismo, en las entidades crediticias internacionales es casi una exigencia 
              que los proyectos con financiación del exterior sean evaluados con este método.{"\n"}{"\n"}

              En el análisis beneficio-costo debemos tener en cuenta tanto las ventajas como las desventajas de aceptar 
              o no proyectos de inversión. Baca (2006) enfatiza que tanto los beneficios como los costos no se cuantifican 
              como se hace en un proyecto de inversión privada, sino que se toman en cuenta criterios sociales 
              (se aplican para evaluar inversiones en escuelas públicas, carreteras, alumbrado público, drenaje y otras 
              obras).{"\n"}{"\n"}

              Aching (2005) explica que este método toma en cuenta el valor del dinero a través del tiempo, en donde los 
              ingresos y los egresos deben ser calculados utilizando el VAN, de acuerdo al flujo de caja; o en su defecto,
              una tasa un poco más baja, llamada «TASA SOCIAL»; tasa utilizada por los gobiernos centrales, locales y 
              regionales para evaluar sus proyectos de desarrollo económico.{"\n"}{"\n"}

              El análisis de la relación B/C, toma valores mayores, menores o iguales a 1, esto significa que:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:270}]}
          source={require('../../../images/Unidad6/6.4.4.png')}
          resizeMode = 'cover'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              La relación B/C sólo entrega un índice de relación y no un valor concreto, además no permite decidir
              entre proyectos alternativos.{"\n"}{"\n"}

              Ejemplo. El Proyecto "x" tiene una duración de 5 años, para el cual se estiman los siguientes flujos de 
              efectivo: 
            </Text>
          </View>
          <View style={styles.titulo}> 
            <Text><H1>Flujos Netos de Efectivo (FNE) para un periodo de 5 años</H1></Text>          
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
          style = {[styles.imagenes,{height:270}]}
          source={require('../../../images/Unidad6/tablaCB.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Considerando una tasa de actualización del 10%, vamos a determinar la relación Beneficio-Costo:
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:180}]}
          source={require('../../../images/Unidad6/tabla2CB.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad6/formCB.png')}
          resizeMode = 'stretch'
          />
        </ScrollView>
        </Container>
      );
    }
  }
  class seispuntocinco extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
          <Text><H1>Periodo de recuperación</H1></Text>          
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
            González (2009) define el periodo de recuperación de la inversión como la técnica por medio de la cual 
            se calcula el tiempo requerido para que una empresa recupere la inversión inicial del proyecto, basándose 
            en los flujos operativos positivos del proyecto.{"\n"}{"\n"}

            Ejemplo: se realiza una inversión de $1,000 y se esperan los siguientes flujos netos de efectivo 
            para los próximos cinco años: 
          </Text>    
        </View>              
        <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/tabla6.5.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Recuerda que el flujo neto de efectivo (FNE) se refiere solo a las entradas y salidas de 
              dinero en efectivo y se obtiene restando los egresos totales a los ingresos totales ( en la tabla 
              anterior ya te están dando ese resultado); el flujo acumulado para el primer año se obtuvo así -1,000 + 
              250 = -350, para el segundo año es -350 + 300 = -50 y así sucesivamente.{"\n"}{"\n"}

              Para calcular el periodo de recuperación de la inversión podemos utilizar la siguiente fórmula:
            </Text> 
          </View>  
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/6.5.png')}
          resizeMode = 'cover'
          />    
          <Image
          style = {[styles.imagenes,{height:160}]}
          source={require('../../../images/Unidad6/ventajas6.5.png')}
          resizeMode = 'stretch'
          />   
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/desventajas6.5.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Indicadores sociales</H1></Text>          
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
              Un indicador social es una medida estadística directa, orientada y válida que permite observar el nivel 
              y las variaciones en el tiempo de una preocupación social fundamental, OCDE (1981).{"\n"}{"\n"}

              Existen diversos indicadores sociales que están relacionados con el crecimiento y el bienestar de la población 
              tales como: salud, educación, derecho a la cultura, natalidad, alimentación, vestido y vivienda, calidad de 
              vida, entre otros.{"\n"}{"\n"}

              Aunque también hay otros indicadores sociales que se encuentran estrechamente relacionados con la 
              actividad económica y se utilizan para medir los beneficios que los proyectos de inversión aportan a 
              la comunidad, tal es el caso de la relación población-empleo.{"\n"}{"\n"}

              Conoce más sobre sobre indicadores sociales en México: 
            </Text> 
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('http://www.pudh.unam.mx/perseo/panorama-de-la-sociedad-2014-mexico-indicadores-sociales/')}>              
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/btn.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>  
          <View style={styles.titulo}> 
            <Text><H1>Generación de empleos</H1></Text>          
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
              Los proyectos de inversión en su conjunto (pequeños, medianos o grandes), independientemente de la 
              industria o sector al que pertenezcan, generan un impacto en la economía local o bien en la economía 
              en su conjunto. Este impacto se manifiesta principalmente en la generación de fuentes de empleo y 
              autoempleo. Pese a lo que se cree, el segmento que mayor cantidad de empleos ofrece al mercado es el de 
              las pequeñas y medianas empresas (Pymes). Según un informe realizado por la Organización Internacional 
              del Trabajo, en Latinoamérica existen cerca de 10 millones de micro y pequeñas empresas, generando el 
              47% de los empleos que hoy en día existen en la región, lo que es sin duda un número importante para la 
              economía de un país, no solo por constituir fuentes de trabajo, sino también por permitir el aumento de 
              la productividad, sobre todo, en épocas de recesión o desaceleración económica.{"\n"}{"\n"}

              Vale la pena destacar que en México, el 99.8 por ciento de las empresas formales son micro, pequeña y 
              medianas y generan en este país el 72 % del empleo y el 52 % del Producto Interno Bruto (PIB), lo que 
              las convierte en la columna vertebral de la economía mexicana. (La fuerza del país son las Mipymes, el 
              Financiero 21/03/2016).  
            </Text> 
          </View>
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad6/6.5.2.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.titulo}> 
            <Text><H1>Costo por empleo generado</H1></Text>          
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
              Determinar exactamente cuánto le cuesta a la empresa cada uno de sus empleados es sumamente difícil; 
              sin embargo, hay datos muy útiles que permiten hacer cálculos aproximados de dichos costos.{"\n"}{"\n"}

              En términos generales, el empleador no solo paga los sueldos y salarios de sus trabajadores y empleados; 
              adicionalmente, realiza otras erogaciones correspondientes a prestaciones de ley y otras adicionales a 
              la ley, beneficios de seguridad social y algunos otros beneficios.{"\n"}{"\n"}

              A manera de referencia, te presentamos la siguiente tabla con información acerca de lo que puede ser el costo 
              por empleo generado:
            </Text> 
          </View>
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad6/tabla7.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Si analizas la información anterior comprenderás la razón por la que muchas empresas consideran y 
              optan por las modalidades de outsourcing y home office. 
            </Text>
          </View>
          </ScrollView>
        </Container>
      );
    }
  }
  class seispuntoseis extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
        <View style={styles.titulo}> 
          <Text><H1>Valor agregado</H1></Text>          
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
            Se llama valor agregado a la característica extra que tiene un producto o servicio y que lo hace 
            diferente a los existentes en el mercado. Esta diferenciación genera un mayor valor en la percepción 
            del consumidor, lo que impacta directamente en las ventas de las empresas; factor determinante entre 
            el éxito o el fracaso de algún producto o servicio en particular e incluso de la propia empresa.{"\n"}{"\n"}

            A través del tiempo lo que conforma el “valor agregado” también ha ido evolucionando; por ejemplo en el siglo 
            XIX este valor se centraba básicamente en la eficiencia en cuanto a la utilización de la materia prima; la 
            calidad fue el paradigma de la primera mitad del siglo XX; durante la segunda mitad del siglo XX el mayor 
            énfasis recaía en la personalización y diferenciación en cuanto al servicio; y recientemente (en las dos 
            últimas décadas), el valor además de considerar todo lo anterior va más allá: se enfoca por un lado, en 
            crear experiencias; es decir, en provocar sentimientos y emociones en las personas (clientes) y por el otro, 
            en la responsabilidad social lo que significa una contribución activa y voluntaria por parte de las empresas 
            para mejorar el entorno social, económico y ambiental contribuyendo así al bienestar de la sociedad en general.
          </Text> 
        </View>                
        <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad6/6.png')}
          resizeMode = 'cover'
          /> 
          <View style={styles.titulo}> 
            <Text><H1>Impacto ecológico</H1></Text>          
          </View>
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              A partir de la Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo, 
              realizada en Río de Janeiro en 1992, los países que participaron se comprometieron a desarrollar 
              instrumentos de carácter nacional para asegurar que se evalúe la variable ambiental de toda actividad 
              que pudiera generar impactos al medio ambiente (Murcia, 2010).{"\n"}{"\n"} 

              Se deben destinar los recursos necesarios para la evaluación ambiental del proyecto, 
              ésta es responsabilidad del proponente del proyecto.{"\n"}{"\n"}

              Cuando el proyecto es de alto impacto ambiental (construcción de represas, explotaciones mineras o 
              construcciones de aeropuertos) con frecuencia se acude a consultores u otras entidades para llevar 
              acabo la evaluación ambiental y algunas veces es necesario consultar a expertos internacionales. Se deben 
              determinar los impactos ambientales que se generarán en las diversas etapas del proyecto, estos impactos 
              pueden ser al agua, al aire, al suelo, al componente biótico y a las poblaciones humanas. 
            </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad6/6.6.1.png')}
          resizeMode = 'cover'
          /> 
          <View style={styles.titulo}> 
          <Text><H1>Legislación y Normatividad Ambiental</H1></Text>          
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
            Los proyectos de inversión para su operación deben cumplir con las leyes y la reglamentación en 
            todos los aspectos, que abarcan desde las obligaciones fiscales hasta los aspectos ecológicos 
            (trámites y permisos ambientales).{"\n"}{"\n"}

            Los representantes legales del proyecto están obligados al cumplimiento de las leyes que regulen el 
            funcionamiento de las plantas productivas, de no ser así las empresas serían sancionadas o multadas e 
            incluso podrían ser clausuradas, lo cual produce un retraso en el inicio de operaciones y encarece la 
            operación de las plantas productivas. En México, el ámbito ecológico es regulado a través de la Ley General 
            de Equilibrio Ecológico y la Protección al Ambiente. Esta ley fija los lineamientos para la formulación 
            de la política ambiental, el establecimiento de instrumentos económicos que permitan el equilibrio 
            ecológico, evaluación del impacto ambiental, normas oficiales mexicanas en materia ambiental, 
            autorregulación y auditorías ambientales, medidas de control, seguridad y sanciones e inspección y 
            vigilancia del cumplimiento de la ley de equilibrio ecológico.{"\n"}{"\n"}

            A pesar de que el cumplimiento de las leyes y reglamentos implica un costo para el proyecto, paralelamente 
            también representa una ventaja, porque cuando los consumidores identifican a las empresas que cuidan el 
            ambiente, que pagan sus impuestos, que cumplen con las leyes y reglamentos, les genera más seguridad y 
            confianza creando una imagen positiva de la empresa.
          </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/Unidad6/6.6.2.png')}
          resizeMode = 'cover'
          /> 
          <View
          style={{
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            marginLeft:10,
            marginRight:10,
          }}
        />
          <View style={styles.titulo}> 
          <Text><H1>Uso de energía, agua, aire, suelo y generación y disposición de recursos peligrosos</H1></Text>          
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
              Desde la formulación del proyecto se debe demostrar:         
            </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:380}]}
          source={require('../../../images/Unidad6/6.6.3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
          <Text style={styles.letras}>
              Con esta unidad temática has concluido la unidad de aprendizaje, ahora tienes un panorama más amplio 
              acerca de la estructura y metodología que se sigue para la preparación y evaluación de un proyecto 
              de inversión; esperamos que se haya cumplido la intención educativa de esta unidad de aprendizaje: 
              contribuir al perfil de egresado en Ingeniería en Sistemas Computacionales, al desarrollar las 
              capacidades para analizar planes de negocio; generar proyectos de inversión para la toma de decisiones; 
              comprender y aplicar la normatividad para la integración de los mismos; promover el orden, la limpieza y 
              responsabilidad para la generación de información aplicada a los sistemas computacionales, fomentar la 
              iniciativa y el respeto a las opiniones de las personas para promover el trabajo colaborativo.{"\n"}{"\n"}

              Solo esperamos que este material te haya sido de gran utilidad.{"\n"}{"\n"}

              ¡¡Gracias!!
            </Text> 
        </View>          
        </ScrollView>
      </Container>
      );
    }
  }  
  var {width} = Dimensions.get('window');
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
    '6.1': { screen: seispuntouno },
    '6.2': { screen: seispuntodos },
    '6.3': { screen: seispuntotres},
    '6.4': { screen: seispuntocuatro},
    '6.5': { screen: seispuntocinco},
    '6.6': { screen: seispuntoseis},
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