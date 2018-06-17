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
class inicio extends React.Component {
  render() {
    return (        
      <Container style={styles.fondo}>
      <StatusBar 
          barStyle="light-content"
          backgroundColor='#F64747'
          animated = {true}
          hidden = {false} /> 
      </Container>
    );
  }
}

class trespuntouno extends React.Component {
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
    <Text><H1>3.1 Elementos que integran el estudio técnico</H1></Text>
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
      El estudio técnico comprende todo aquello que tenga relación con el funcionamiento y la operatividad del proyecto. Con este estudio se pretende 
      dar respuesta a las siguientes preguntas (desliza el cursor sobre ellas):
    </Text>          
            </View>
      
    <Image
            style = {[styles.imagenes,{height:300}]}
            source={require('../../../images/Unidad3/EstudioTecnico.png')}
            resizeMode = 'center'
            />
    </ScrollView>
          </Container>
        );
      }
  }

class trespuntodos extends React.Component {
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
  <Text><H1>3.2 Localización general y específica de la planta</H1></Text>
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
    ¿Dónde localizar la empresa?, es una decisión muy importante, que impacta a los costos y en consecuencia las utilidades. 
    Antes de determinar en dónde ubicarás tu negocio, tendrás que analizar algunas variables tales como: 
  </Text>          
          </View>
    
   <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/locgeneral.png')}
          resizeMode = 'center'
          />
  <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/location.png')}
          resizeMode = 'center'
          />
  

  <View style={styles.titulo}>  
  <Text><H1>3.2.1 Macro localización</H1></Text>
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
    También llamada macro zona, se refiere a la región, el territorio o el estado en donde se pretende realizar el proyecto. 
    Se comparan alternativas entre las zonas del país y se selecciona la que ofrece mayores ventajas para el proyecto. 
  </Text>          
          </View>
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/macro.png')}
          resizeMode = 'center'
          />
  <View style={styles.titulo}>  
  <Text><H1>3.2.2 Micro localización</H1></Text>
  </View>

   <View style={styles.cuerpo}>
  <Text style={styles.letras}>
    Una vez que se tiene definida la macro localización se identifica, en función de los factores o variables evaluadas, 
    la micro localización; es decir, el sitio exacto (calle, número, colonia, delegación o municipio etc.) en donde se ubicará la empresa.
  </Text>          
    </View>
  <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/micro.png')}
          resizeMode = 'center'
          />
  <View style={styles.titulo}>  
  <Text><H1>3.2.3 Evaluación de alternativas de localización</H1></Text>
  </View>

  <View style={styles.cuerpo}>
  <Text style={styles.letras}>
    Existen diferentes métodos que ayudan a analizar, evaluar y seleccionar la mejor alternativa 
    del lugar en donde debe establecerse la empresa. Dichos métodos son:
  </Text>          
    </View>
     <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/3.2.3.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
  <Text style={styles.letras}>
    Imagen 3.6. Fuente: Elaboración propia con base en la bibliografía consultada 
  </Text>
  </View>
  <View style={styles.cuerpo}>
  <Text style={styles.letras}>
    En la siguiente lectura "Métodos para la evaluación de opciones de localización" 
    encontrarás más información de cada uno de los métodos antes mencionados.  
  </Text>
  </View>
  <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/crqshwpjmxy2sfc/evaluacion.pdf?dl=1')}>
      <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/L4.png')}
          resizeMode = 'center'
          />
          </TouchableHighlight>
      <View style={styles.cuerpo}>
  <Text style={styles.letras}>
    Una vez que leíste el material anterior, realiza la siguiente evidencia de aprendizaje:  
  </Text>
  </View>
        <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/k2ry8uyogmhgl6a/tresseis.pdf?dl=1')}>
          <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad3/ea6.png')}
              resizeMode = 'center'
              />
          </TouchableHighlight>
          <View style={styles.titulo}>  
          <Text><H1>3.2.4 Localización específica</H1></Text>
          </View>
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
            Una vez que se han evaluado, por algún método, las ventajas y desventajas de los posibles lugares que se tienen contemplados para localizar la empresa, 
            se selecciona la alternativa que resulte más conveniente para el proyecto. 
            No debes olvidar que la localización de la empresa es sin duda una decisión estratégica.
          </Text>
          </View>

          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/locesp.png')}
          resizeMode = 'center'
          />
          
          <View style={styles.titulo}>  
          <Text>Imagen 3.7. Fuente: Elaboración propia</Text>
          </View>

        </ScrollView>
          
        </Container>
      );
    }
  } 
  
  
class trespuntotres extends React.Component {
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
	<Text><H1>3.3 Tamaño o capacidad del proyecto</H1></Text>
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
	  De acuerdo con Baca (2006), el tamaño de un proyecto puede estar en función de dos rubros:
	</Text>          
          </View>
		
	 <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad3/porcentaje.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
            El porcentaje del área de mercado que cubrirá   	
            </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text >
            Es decir, como empresarios debemos tener una idea clara del porcentaje de mercado que estimamos cubrir o atender. 
          Este porcentaje está en función de factores tales como la demanda, la oferta y también de la capacidad productiva de la empresa. 
          Puede darse el caso que la demanda sea mayor a lo que la empresa puede producir dada su infraestructura.  	
            </Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/Unidad3/cantidad.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
            La cantidad de bienes o servicios que producirá  	
            </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text >
            	Se refiere al tamaño técnico o capacidad instalada, 
                ésta última se expresa en unidades de producción en una unidad de tiempo  	
            </Text>          
          </View>
 
          
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
           Tabla 6. Fuente: Elaboración propia con base en Baca, G. (2006). 
           Evaluación de proyectos. México: Mc Graw Hill, 5ta. Edición	
            </Text>        
          </View>
          
          
          <View style={styles.cuerpo}>
          <Text >
           Otros factores que nos permiten definir el tamaño de un proyecto son: el monto de la inversión, 
          la ocupación de fuerza laboral y el tipo de proceso productivo 
          (automatizado, semiautomatizado o extensivo en mano de obra).  	
            </Text>          
          </View>
          
          <View style={styles.titulo}>  
	<Text><H1>3.3.1 Tipos de capacidades</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
          <Text >
           El “tamaño de un proyecto” es su capacidad instalada y se expresa en unidades de producción (volumen) en una unidad de tiempo. 
        Existen tres tipos de capacidad instalada: 	
            </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text >
          a.- Capacidad de diseño: es la producción máxima estimada (planeada) que se puede lograr bajo condiciones ideales de operación.
            {"\n"}{"\n"}
          b.-Capacidad del sistema: es la producción máxima que el sistema (recursos humanos, maquinaria e infraestructura ) puede generar en forma integrada.
          Cabe mencionar que, la mayoría de las empresas no operan a su máxima capacidad, por factores como la falta de mantenimiento de la maquinaria, 
          los errores en el personal, los tiempos perdidos, los cuellos de botella etc.
          {"\n"}{"\n"}
          c.- Capacidad real: es la producción real obtenida en un período determinado, tomando en cuenta las contingencias que se presentaron en la producción.
            </Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/capacidades.png')}
          resizeMode = 'center'
          />
             
        <View style={styles.cuerpo}>
          <Text >
           Imagen 3.8. Fuente: Elaboración propia 	
            </Text>          
          </View>
          
          <View style={styles.titulo}>  
	<Text><H1>3.3.2 Factores a considerar para fijar la capacidad o tamaño del proyecto</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
          <Text >
            Si tenemos claro cuál es el tamaño de nuestro proyecto podremos estimar en forma más objetiva el monto de la inversión requerida y el nivel de operación, que a su vez, 
            nos permitirá cuantificar los costos de funcionamiento y los ingresos proyectados. 
            {"\n"}{"\n"}
            Los factores que determinan el tamaño de una nueva unidad de producción (proyecto) son:
            </Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/3.3.2.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text >
          Imagen 3.9. Fuente: Elaboración propia
            </Text>          
          </View>
          <View style={styles.cuerpo}>
          <Text >
          A.-El tamaño del proyecto y la demanda. Es quizá el factor más importante para determinar el tamaño del proyecto; para estimar en términos objetivos la demanda actual y futura que habrá de atenderse, se debe tomar en cuenta tanto la dinámica del mercado como la capacidad productiva de la empresa.
            En cuanto a la demanda y la capacidad instalada se pueden presentar estas situaciones:
            {"\n"}{"\n"}
            -Si la capacidad es: es mayor que la demanda; es decir, tener un tamaño sobreestimado puede generar capacidad instalada ociosa, lo que significa que se está invirtiendo en activos improductivos.
            {"\n"}{"\n"}
            -Si la capacidad es menor que la demanda; es decir, tener capacidad instalada insuficiente se puede perder mercado por falta de atención.
            {"\n"}{"\n"}
          B.-El tamaño del proyecto y la tecnología Existen procesos productivos que exigen una cantidad mínima de producción, porque si se produce debajo de dicha cantidad los costos serían tan elevados que no se justificaría la operación de la planta. Lo que significa que la automatización de un proceso exige un nivel mínimo de producción para que sea rentable.
          {"\n"}{"\n"}
          C.-El tamaño del proyecto y la disponibilidad de insumos Se tendrá que hacer un estudio de quiénes serán los proveedores de los insumos actuales y futuros requeridos para fabricar los productos o para prestar los servicios durante el tiempo que funcionará el proyecto de inversión. Es importante que en la medida de lo posible se garantice el volumen, precio, calidad y tiempos de entrega de los insumos; aunque también valdría la pena considerar un plan de contingencia para aquellos casos en el que el abastecimiento no sea totalmente seguro y poder adquirir insumos sustitutos o bien conseguirlos en el extranjero.
          {"\n"}{"\n"}
          D.-El tamaño del proyecto y el financiamiento. Si eres microempresario te recomendamos acercarte a la banca de desarrollo o de segundo piso quienes, siempre y cuando cumplas con los requisitos solicitados, pueden financiarte tu proyecto con tasas de interés más bajas que las que puedes conseguir en la banca comercial. Adicionalmente, hoy día tienes varias opciones como las fondeadoras.
          {"\n"}{"\n"}
          E.-El tamaño del proyecto y la inversión. Definitivamente este factor va de la mano con el tamaño del proyecto, proyectos más grandes requerirán mayores montos de inversión lo que muchas veces exige recurrir a fuentes de financiamiento.
          {"\n"}{"\n"}
        </Text>          
          </View>
          <View style={styles.titulo}>  
	<Text><H1>3.3.3 Programa de producción y ventas</H1></Text>
	</View>
        <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/333.png')}
          resizeMode = 'center'
          />
          
          <View style={styles.cuerpo}>
          <Text >
          El programa de producción es un documento en donde se especifica por escrito la cantidad de producción por unidad de tiempo. Con dicha programación se determina cuándo se debe iniciar y terminar cada lote de producción, qué operaciones se van a utilizar, con qué máquina y con qué operarios y demás recursos que se necesiten. 
          {"\n"}{"\n"}
          El programa de producción se formula con base en un presupuesto de ventas, el cual puede fundamentarse en la demanda estimada y/o en la capacidad productiva de la empresa de acuerdo a su infraestructura. 
            </Text>          
          </View>
        <View style={styles.titulo}>  
	<Text><H1>3.3.4 Método para calcular el tamaño óptimo</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
          <Text >
         Debido a variedad y complejidad de los procesos productivos es casi imposible desarrollar un método estandarizado que nos ayude a determinar la capacidad actual y futura de una planta productiva. 
         {"\n"}{"\n"}
         Existen al menos tres métodos con los que podemos estimar las dimensiones de la planta:
            </Text>          
          </View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={210}
                       imageWidth={width}
                       imageHeight={210}>
                <Image style={{width:width, height:210}}
                      source={require('../../../images/Unidad3/3.3.4.png')}/>
          </ImageZoom> 
          
          <View style={styles.cuerpo}>
          <Text >
          En la siguiente lectura "Métodos para determinar el tamaño del proyecto" 
          encontrarás más información de cada uno de los métodos mencionados anteriormente.
            </Text>          
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/c3ld0pq2vmnl54g/determinar.pdf?dl=1')}>
         <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/L5.png')}
          resizeMode = 'center'
          />
          
          </TouchableHighlight>
        
        
          
          
	</ScrollView>
        </Container>
      );
    }
  }
  
class trespuntocuatro extends React.Component {
    render() {
      return (  
	<Container style={styles.fondo}>
        	<StatusBar 
            	barStyle="light-content"
            	backgroundColor='#FF473A'
            	animated = {true}
            	hidden = {false} />
               
<<<<<<< HEAD
          	<ScrollView>
        <View style={styles.titulo}>  
	<Text><H1>3.4 Ingeniería del proyecto</H1></Text>
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
	  La ingeniería del proyecto se refiere a la etapa técnica del proyecto la cual comprende:
	</Text>          
          </View>
		
	 <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/34.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text>
            Imagen 3.12. Fuente: Elaboración propia con base en la bibliografía consultada 
	</Text>          
          </View>
          <View style={styles.titulo}>  
	<Text><H1>3.4.1 Definición técnica del producto</H1></Text>
	</View>
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  La especificación técnica de un producto se documenta en lo que se conoce como ficha técnica, 
          la cual contiene información básica, útil, clara y concisa del producto.
	</Text>          
          </View>
        <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/Unidad3/341.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text>
            Imagen 3.13. Fuente: Elaboración propia	
            </Text>          
          </View>
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	            Además de la información anterior, se puede añadir cualquier otro dato que se considere importante.
	</Text>          
          </View>
          
          <View style={styles.titulo}>  
	<Text><H1>3.4.2 Planos y especificaciones</H1></Text>
	</View>
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Una vez que se han definido las dimensiones, características y la ubicación de cada una de las áreas que conformarán la empresa, se deberán diseñar los planos (representación gráfica a escala) correspondientes con todas las especificaciones. 
          Hay que considerar que no solo se realiza el plano de la construcción,
          sino también el de instalaciones eléctricas, sanitarias, gas, etc. 
	</Text>          
          </View>
           <View style={styles.titulo}>  
      <Text><H1>3.4.3 Descripción y diseño del proceso de producción</H1></Text>
      </View>
        

          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Un proceso de producción es un procedimiento técnico que se utiliza para obtener los bienes y servicios a partir de insumos.
          {"\n"}{"\n"}
En sumamente importante tener bien definido el proceso productivo porque a partir de éste podrás determinar los requerimientos de insumos, mano de obra, infraestructura, maquinaria y equipos, mismos que deben cuantificarse en términos monetarios para saber el monto de la inversión inicial así como los costos de operación.
{"\n"}{"\n"}
El proceso productivo debe describirse de manera clara y detallada; para posteriormente representarse en un diagrama. Algunos de los diagramas que existen para representar el proceso productivo son: diagrama de bloques, diagrama de flujo del proceso, cursograma analítico, diagrama de hilos y diagrama de recorrido. 
{"\n"}{"\n"}
Ventajas e importancia de representar los procesos y procedimientos mediante diagramas:
	</Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:80}]}
          source={require('../../../images/Unidad3/ventajas.png')}
          resizeMode = 'center'
          />
          
          <View style={styles.cuerpo}>
          <Text>
                Imagen 3.15. Fuente: Elaboración propia            
          </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text>
             En la siguiente lectura "Diagramas del proceso de producción" encontrarás más información sobre el tema 
          </Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/L3.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text>
                Después de leer el material anterior, realiza las evidencias de aprendizaje          
           </Text>          
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/91o483mv0qqd2at/tresuno.pdf?dl=1')}>
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/ea1.png')}
          resizeMode = 'center'
          />
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/oxn9hv0upxkl9we/tresdos.pdf?dl=1')}>
          <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/ea2.png')}
          resizeMode = 'center'
          />
          </TouchableHighlight>
          <View style={styles.titulo}>  
	<Text><H1>3.4.4 Materia prima</H1></Text>
	</View>
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Uno de los principales insumos en un proceso productivo es la materia prima, ésta forma parte del producto, por lo general los insumos son de origen agrícola (trigo, soya, frutas, etc);
        acuícola (productos del mar); pecuario (ganadería), forestal (madera, leña, pasto, etc) y mineros (metales y minerales).
	</Text>          
          </View>
          
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/345.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
          <Text>
                Imagen 3.16. Fuente: Elaboración propia 
           </Text>          
          </View>
           
           <View style={styles.titulo}>  
	<Text><H1>3.4.5 Determinación de los requerimientos y disponibilidad de materia prima</H1></Text>
	</View>
        
        <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/3.4.6.png')}
          resizeMode = 'center'
          />
           <View style={styles.cuerpo}>
          <Text>
          Imagen 3.17. Fuente: Elaboración propia 
           </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Para determinar la cantidad de materia prima que necesitas tendrás que basarte tanto en tu plan de producción (estimación del número de unidades a producir en un periodo de tiempo) 
           así como en tu proceso productivo,para que entre otros aspectos tomes en cuenta las mermas y los desperdicios y tengas la materia prima suficiente para cumplir con el plan de producción.
           {"\n"}{"\n"}
           Por otro lado, en la medida de lo posible, debes garantizar el abastecimiento y la calidad de las materias primas que requieres para tu proceso productivo e inclusive, 
           es recomendable investigar sobre la existencia de materias primas sustitutas para aquellos casos en que se escasee la materia prima que regularmente se ocupa en el proceso productivo.
	</Text>          
          </View>
          <View style={styles.titulo}>  
	<Text><H1>3.4.6 Estudio del medio ambiente</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Los proyectos impactan en mayor o menor medida al medio ambiente, aunque cabe señalar que existen proyectos que su principal compromiso es mejorar 
           las condiciones ambientales a través de acciones para minimizar o anular el impacto negativo del proyecto sobre su entorno.
	</Text>          
          </View>
           
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/347.png')}
          resizeMode = 'center'
          />
           <View style={styles.cuerpo}>
          <Text>
          Imagen 3.18. Fuente: Elaboración propia 
           </Text>          
          </View>
          <View style={styles.titulo}>  
	<Text><H1>3.4.7 Estimación de requerimientos de mano de obra</H1></Text>
	</View>
        <View style={styles.cuerpo}>
          <Text style={styles.letras}>
	  Después de determinar la cantidad y características de la maquinaria, equipo, tecnología y turnos de trabajo que se ocuparán en el proceso productivo, 
        es posible definir las necesidades de personal técnico.
        {"\n"}{"\n"}
        El personal técnico comprende:
	</Text>          
          </View>
          <View style={styles.cuerpo}>
          <Text>
          Mano de obra directa
           </Text>          
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/1.png')}
          resizeMode = 'center'
          />
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
              Personal que interviene directamente en el proceso productivo.
              </Text>          
          </View>
          <View style={styles.cuerpo}>
          <Text>
          Mano de obra indirecta
           </Text>          
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/3.png')}
          resizeMode = 'center'
          /> 
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
              Personal que no interviene en forma directa en el proceso productivo; sin embargo, las actividades que realizan son igualmente importantes para que sea posible llevar a cabo la producción. 
          Por ejemplo, personal de limpieza, de vigilancia, supervisores de producción, etc.
              </Text>          
          </View>
          
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
              Una vez que se ha determinado la cantidad y características del personal técnico que se requerirá, 
           es importante calcular cuál será el costo que implica tener a dicho personal; de manera muy sencilla 
           }se puede calcular en una tabla como la siguiente:
              </Text>          
          </View>
           <View style={styles.titulo}>  
	<Text><H1>COSTO ANUAL DE PERSONAL TÉCNICO</H1></Text>
	</View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
=======
          <ScrollView>
           <View style={styles.containerr, {height: 7820}}>
            <View style={styles.titulo}>  
              <Text><H1>3.4 Ingeniería del proyecto</H1></Text>
            </View>
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La ingeniería del proyecto se refiere a la etapa técnica del proyecto la cual comprende:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/34.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.12. Fuente: Elaboración propia con base en la bibliografía consultada"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.1 Definición técnica del producto</H1></Text>
            </View>
            <View style={styles.containerr, {height: 90}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La especificación técnica de un producto se documenta en lo que se conoce como ficha técnica, "+
                  "la cual contiene información básica, útil, clara y concisa del producto."+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:200}]}
              source={require('../../../images/Unidad3/341.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.13. Fuente: Elaboración propia"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 80}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Además de la información anterior, se puede añadir cualquier otro dato que se considere importante."+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.2 Planos y especificaciones</H1></Text>
            </View>
            <View style={styles.containerr, {height: 190}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Una vez que se han definido las dimensiones, características y la ubicación de cada una de las áreas que conformarán la empresa, se deberán diseñar los planos (representación gráfica a escala) correspondientes con todas las especificaciones."+ 
                  "Hay que considerar que no solo se realiza el plano de la construcción, "+
                  "sino también el de instalaciones eléctricas, sanitarias, gas, etc."+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.3 Descripción y diseño del proceso de producción</H1></Text>
            </View>
            <View style={styles.containerr, {height: 450}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Un proceso de producción es un procedimiento técnico que se utiliza para obtener los bienes y servicios a partir de insumos."+
                  "</p>"+
                  "<p>"+
                  "En sumamente importante tener bien definido el proceso productivo porque a partir de éste podrás determinar los requerimientos de insumos, mano de obra, infraestructura, maquinaria y equipos, mismos que deben cuantificarse en términos monetarios para saber el monto de la inversión inicial así como los costos de operación."+
                  "</p>"+
                  "<p>"+
                  "El proceso productivo debe describirse de manera clara y detallada; para posteriormente representarse en un diagrama. Algunos de los diagramas que existen para representar el proceso productivo son: diagrama de bloques, diagrama de flujo del proceso, cursograma analítico, diagrama de hilos y diagrama de recorrido."+
                  "</p>"+
                  "<p>"+
                  "Ventajas e importancia de representar los procesos y procedimientos mediante diagramas:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:80}]}
              source={require('../../../images/Unidad3/ventajas.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.15. Fuente: Elaboración propia"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 70}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En la siguiente lectura \"Diagramas del proceso de producción\" encontrarás más información sobre el tema"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad3/L3.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Después de leer el material anterior, realiza las evidencias de aprendizaje"+ 
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/91o483mv0qqd2at/tresuno.pdf?dl=1')}>
              <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad3/ea1.png')}
              resizeMode = 'center'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/oxn9hv0upxkl9we/tresdos.pdf?dl=1')}>
              <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad3/ea2.png')}
              resizeMode = 'center'
              />
            </TouchableHighlight>
            <View style={styles.titulo}>  
              <Text><H1>3.4.4 Materia prima</H1></Text>
            </View>
            <View style={styles.containerr, {height: 150}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Uno de los principales insumos en un proceso productivo es la materia prima, ésta forma parte del producto, por lo general los insumos son de origen agrícola (trigo, soya, frutas, etc); "+
                  "acuícola (productos del mar); pecuario (ganadería), forestal (madera, leña, pasto, etc) y mineros (metales y minerales)."+ 
                  "</p>" 
               }}
              />
            </View>
             <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/345.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.16. Fuente: Elaboración propia"+ 
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.5 Determinación de los requerimientos y disponibilidad de materia prima</H1></Text>
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/3.4.6.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.17. Fuente: Elaboración propia"+ 
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 340}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Para determinar la cantidad de materia prima que necesitas tendrás que basarte tanto en tu plan de producción (estimación del número de unidades a producir en un periodo de tiempo) "+
                  "así como en tu proceso productivo,para que entre otros aspectos tomes en cuenta las mermas y los desperdicios y tengas la materia prima suficiente para cumplir con el plan de producción."+
                  "</p>"+
                  "<p>"+
                  "Por otro lado, en la medida de lo posible, debes garantizar el abastecimiento y la calidad de las materias primas que requieres para tu proceso productivo e inclusive, "+
                  "es recomendable investigar sobre la existencia de materias primas sustitutas para aquellos casos en que se escasee la materia prima que regularmente se ocupa en el proceso productivo."+ 
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.6 Estudio del medio ambiente</H1></Text>
            </View>
            <View style={styles.containerr, {height: 130}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Los proyectos impactan en mayor o menor medida al medio ambiente, aunque cabe señalar que existen proyectos que su principal compromiso es mejorar "+
                  "las condiciones ambientales a través de acciones para minimizar o anular el impacto negativo del proyecto sobre su entorno."+ 
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/347.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.18. Fuente: Elaboración propia"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.7 Estimación de requerimientos de mano de obra</H1></Text>
            </View>
            <View style={styles.containerr, {height: 150}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Después de determinar la cantidad y características de la maquinaria, equipo, tecnología y turnos de trabajo que se ocuparán en el proceso productivo, "+
                  "es posible definir las necesidades de personal técnico."+
                  "</p>"+
                  "<p>"+
                  "El personal técnico comprende:"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Mano de obra directa"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/1.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Personal que interviene directamente en el proceso productivo."+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Mano de obra indirecta"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/3.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 140}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Personal que no interviene en forma directa en el proceso productivo; sin embargo, las actividades que realizan son igualmente importantes para que sea posible llevar a cabo la producción. "+
                  "Por ejemplo, personal de limpieza, de vigilancia, supervisores de producción, etc."+
                  "</p>" 
               }}
              />
            </View> 
            <View style={styles.containerr, {height: 140}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Una vez que se ha determinado la cantidad y características del personal técnico que se requerirá, "+
                  "es importante calcular cuál será el costo que implica tener a dicho personal; de manera muy sencilla "+
                  "se puede calcular en una tabla como la siguiente:"+
                  "</p>" 
               }}
              />
            </View> 
            <View style={styles.titulo}>  
              <Text><H1>COSTO ANUAL DE PERSONAL TÉCNICO</H1></Text>
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
>>>>>>> parent of eaf1a7a... Unidad 5 justificada y Unidad 3 con todas las imagenes
                       cropHeight={110}
                       imageWidth={width}
                       imageHeight={110}>
                <Image style={{width:width, height:110}}
                         source={require('../../../images/Unidad3/tabla.png')}/>
<<<<<<< HEAD
          </ImageZoom> 
          <View style={styles.cuerpo}>
          <Text>
          Tabla 8. Fuente: Elaboración propia
           </Text> 
           </View>
           <View style={styles.titulo}>  
	<Text><H1>3.4.8 Selección de maquinaria y equipo</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
              <Text style={styles.letras}>
              La maquinaria y el equipo se seleccionan en función de las características del proceso productivo, del nivel de operación requerido y en general, del tamaño del proyecto.
           Para seleccionar la maquinaria y equipo es importante tomar en cuenta los siguientes factores:
              </Text>          
          </View>
          
          <View style={styles.cuerpo}>
          <Text>
          Tabla 9. Fuente: Elaboración propia con base en la bibliografía consultada
           </Text> 
           </View>
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
              Los requerimientos en cuanto a espacio físico se calculan una vez que se ha:
              {"\n"}{"\n"}
                A.-Definido el proceso productivo
                {"\n"}{"\n"}
                B.-Determinado la cantidad y características de la maquinaria y el equipo
                {"\n"}{"\n"}
                C.-Definido la cantidad de trabajadores y empleados necesarios para el funcionamiento de la empresa
                
              </Text>          
          </View>
          
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Adicionalmente, se deben considerar los espacios en metros cuadrados para el almacén, bodegas, salas de espera, comedor, sala de juntas, 
                rutas de evacuación y de emergencia, sanitarios, estacionamiento, áreas verdes, caseta de vigilancia, 
                áreas de carga y de descarga, en caso de requerirse y cualquier otro espacio que se considere necesario.
              </Text>          
          </View>
           <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/Unidad3/3.4.10.png')}
          resizeMode = 'center'
          /> 
          <View style={styles.cuerpo}>
          <Text>
         Imagen 3.19. Fuente: Elaboración propia 
           </Text> 
           </View>
           
           <View style={styles.cuerpo}>
          <Text>
            Es el momento de realizar la siguiente evidencia de aprendizaje
           </Text> 
           </View>
           <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/snp6tckgtlcp48e/trescuatro.pdf?dl=1')}>
          
           <Image
          style = {[styles.imagenes,{height:100}]}
          source={require('../../../images/Unidad3/ea4.png')}
          resizeMode = 'center'
          /> 
          </TouchableHighlight>
          
          <View style={styles.titulo}>  
	<Text><H1>3.4.10 Distribución de planta</H1></Text>
	</View>
        
        <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Se refiere a la asignación de áreas y disposición física de las máquinas, departamentos, 
                estaciones de trabajo, áreas de almacenamiento, pasillos, espacios comunes y de seguridad 
                dentro de una instalación productiva.

              </Text>          
          </View>
          
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Los objetivos y principios básicos en la distribución de instalaciones son:
                {"\n"}{"\n"}
A.-Integración total. Consiste en incluir y unir todos los factores (personas, departamentos, maquinaria, etc) que intervienen en la distribución, de manera que se haga más eficiente el funcionamiento y la operación de la empresa.
{"\n"}{"\n"}
B.-Mínima distancia de recorrido. Busca que los materiales recorran una distancia mínima al menor costo.
{"\n"}{"\n"}
C.-Utilización del espacio cúbico. Consiste en ocupar el especio vertical y horizontal, sobre todo cuando los espacios son reducidos.
{"\n"}{"\n"}
D.-Seguridad y bienestar del trabajador. Éste debe ser el principal objetivo en toda distribución, se deben proporcionar las condiciones óptimas de seguridad y bienestar para los trabajadores.
{"\n"}{"\n"}
E.-Flexibilidad. En la medida de lo posible se debe procurar que la distribución sea fácilmente reajustable a los cambios que pudieran surgir; por ejemplo, un cambio en el tipo de proceso o bien el crecimiento de la planta.

              </Text>          
          </View>
          
           <Image
               style = {[styles.imagenes, {height:150}]}
               source={require('../../../images/Unidad3/34111.png')}
               resizeMode = 'center'
               />
               
               <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                En la siguiente tabla encontrarás más información de cada uno de los tipos de distribución:
              </Text>          
          </View>
          <ImageZoom cropWidth={Dimensions.get('window').width}
=======
            </ImageZoom> 
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Tabla 8. Fuente: Elaboración propia"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}>  
              <Text><H1>3.4.8 Selección de maquinaria y equipo</H1></Text>
            </View>
            <View style={styles.containerr, {height: 140}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La maquinaria y el equipo se seleccionan en función de las características del proceso productivo, del nivel de operación requerido y en general, del tamaño del proyecto."+
                  "Para seleccionar la maquinaria y equipo es importante tomar en cuenta los siguientes factores:"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Tabla 9. Fuente: Elaboración propia con base en la bibliografía consultada"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 220}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Los requerimientos en cuanto a espacio físico se calculan una vez que se ha:"+
                  "</p>"+
                  "<p>"+
                  "A.-Definido el proceso productivo"+
                  "</p>"+
                  "<p>"+
                  "B.-Determinado la cantidad y características de la maquinaria y el equipo"+
                  "</p>"+
                  "<p>"+
                  "C.-Definido la cantidad de trabajadores y empleados necesarios para el funcionamiento de la empresa"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 190}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Adicionalmente, se deben considerar los espacios en metros cuadrados para el almacén, bodegas, salas de espera, comedor, sala de juntas, "+
                  "rutas de evacuación y de emergencia, sanitarios, estacionamiento, áreas verdes, caseta de vigilancia, "+
                  "áreas de carga y de descarga, en caso de requerirse y cualquier otro espacio que se considere necesario."+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad3/3.4.10.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 40}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Imagen 3.19. Fuente: Elaboración propia"+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Es el momento de realizar la siguiente evidencia de aprendizaje"+
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/snp6tckgtlcp48e/trescuatro.pdf?dl=1')}>
            <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad3/ea4.png')}
              resizeMode = 'center'
              /> 
            </TouchableHighlight>
            <View style={styles.titulo}>  
              <Text><H1>3.4.10 Distribución de planta</H1></Text>
            </View>
            <View style={styles.containerr, {height: 110}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Se refiere a la asignación de áreas y disposición física de las máquinas, departamentos, "+
                  "estaciones de trabajo, áreas de almacenamiento, pasillos, espacios comunes y de seguridad "+
                  "dentro de una instalación productiva."+
                  "</p>" 
               }}
              />
            </View> 
            <View style={styles.containerr, {height: 400}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Los objetivos y principios básicos en la distribución de instalaciones son:"+
                  "</p>"+
                  "<p>"+
                  "A.-Integración total. Consiste en incluir y unir todos los factores (personas, departamentos, maquinaria, etc) que intervienen en la distribución, de manera que se haga más eficiente el funcionamiento y la operación de la empresa."+
                  "</p>"+
                  "<p>"+
                  "B.-Mínima distancia de recorrido. Busca que los materiales recorran una distancia mínima al menor costo."+
                  "</p>"+
                  "<p>"+
                  "C.-Utilización del espacio cúbico. Consiste en ocupar el especio vertical y horizontal, sobre todo cuando los espacios son reducidos."+
                  "</p>"+
                  "<p>"+
                  "D.-Seguridad y bienestar del trabajador. Éste debe ser el principal objetivo en toda distribución, se deben proporcionar las condiciones óptimas de seguridad y bienestar para los trabajadores."+
                  "</p>"+
                  "<p>"+
                  "E.-Flexibilidad. En la medida de lo posible se debe procurar que la distribución sea fácilmente reajustable a los cambios que pudieran surgir; por ejemplo, un cambio en el tipo de proceso o bien el crecimiento de la planta."+
                  "</p>" 
               }}
              />
            </View> 
            <Image
              style = {[styles.imagenes, {height:150}]}
              source={require('../../../images/Unidad3/34111.png')}
              resizeMode = 'center'
            />
            <View style={styles.containerr, {height: 90}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En la siguiente tabla encontrarás más información de cada uno de los tipos de distribución:"+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
>>>>>>> parent of eaf1a7a... Unidad 5 justificada y Unidad 3 con todas las imagenes
                       cropHeight={350}
                       imageWidth={width}
                       imageHeight={350}>
                <Image style={{width:width, height:350}}
                        source={require('../../../images/Unidad3/tabla2.png')}/>
          </ImageZoom> 
               
               <View style={styles.cuerpo}>
          <Text>
            Tabla 10. Fuente: Elaboración propia con base en la bibliografía consultada 
           </Text> 
           </View>
           
           <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Existen algunos métodos de los cuales podemos auxiliarnos al momento de diseñar la distribución de las instalaciones. Al respecto, 
                Baca (2006) sugiere el diagrama de recorrido y el Systematic Layout Planning (SLP). 
                En la siguiente lectura "Métodos para la distribución de las instalaciones" encontrarás más información acerca de estos métodos. 
              </Text>          
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/w2mac9ac88w403a/distribucion.pdf?dl=1')}>
           <Image
               style = {[styles.imagenes, {height:100}]}
               source={require('../../../images/Unidad3/L1.png')}
               resizeMode = 'center'
               />
               </TouchableHighlight>
           <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Ahora tienes un panorama de los aspectos que forman parte del estudio técnico, que en términos generales abarca el estudio y análisis de todo lo referente a la operación o funcionamiento del proyecto. 
                {"\n"}{"\n"}
                Cuando existe evidencia clara de la factibilidad en el estudio técnico, se podrá continuar con el estudio administrativo y de organización, del que encontrarás información en la siguiente unidad temática.
                {"\n"}{"\n"}
                Basándote en el tema "distribución de planta" así como en la lectura anterior, resuelve la siguiente evidencia:
              </Text>          
          </View>
          <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/na29cizeral894h/trescinco.pdf?dl=1')}>
           <Image
               style = {[styles.imagenes, {height:100}]}
               source={require('../../../images/Unidad3/ea5.png')}
               resizeMode = 'center'
               />
               </TouchableHighlight>
               
          
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
    '3.1': { screen: trespuntouno },
    '3.2': { screen: trespuntodos },
    '3.3': { screen: trespuntotres},
    '3.4': { screen: trespuntocuatro},
    
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