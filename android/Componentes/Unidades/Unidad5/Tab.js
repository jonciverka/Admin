import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,StatusBar,
  ListView,ScrollView, TouchableNativeFeedback,Alert,TouchableOpacity,TouchableWithoutFeedback,TouchableHighlight
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H1,Thumbnail,Rightpla,CardItem} from 'native-base'
import { TabNavigator } from 'react-navigation';

  class cincopuntouno extends React.Component {
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
            <Text><H1>Presupuestos para la elaboración del estudio financiero</H1></Text>          
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
              El estudio financiero de un proyecto de inversión se hace con base en los presupuestos. Un presupuesto es una estimación en términos monetarios tanto de los ingresos como de los egresos de una empresa.   
              {"\n"}{"\n"}
              El principal presupuesto de ingresos es el presupuesto de ventas; en tanto que los presupuestos de egresos son:
              {"\n"}{"\n"}
              Presupuesto de costos de producción o costo de ventas según sea el caso
              {"\n"}{"\n"}
              Presupuesto de gastos de administración 
              {"\n"}{"\n"}
              Presupuesto de gastos de venta 
              {"\n"}{"\n"}
              Riesgos
              {"\n"}{"\n"}
              Presupuesto de gastos financieros 
              {"\n"}{"\n"}
              Presupuesto de pago de impuestos 
              {"\n"}{"\n"}            
            </Text>          
            </View>
            <Image
            style = {[styles.imagenes,{height:300}]}
            source={require('../../../images/Unidad5/5.1.png')}
            resizeMode = 'cover'
            />
            <View style={styles.titulo}> 
            <Text><H1> Presupuesto de egresos </H1></Text>          
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
              Así como es necesario calcular el monto de la inversión, analizar las fuentes de financiamiento y estimar los ingresos para el proyecto, también es indispensable estimar los costos y gastos (costo de producción, gastos de venta, gastos de administración, gastos financieros e impuestos) que se derivan de la operación (funcionamiento) del proyecto por unidad de tiempo (semana, mes, año, etc.).
              {"\n"}{"\n"}
              Solo teniendo la información anterior podrás: elaborar el presupuesto de efectivo (flujo de caja), calcular el punto de equilibrio así como los indicadores financieros que te permitirán evaluar el proyecto y así tomar decisiones
              {"\n"}{"\n"}                         
            </Text>          
            </View>
            <Image
            style = {[styles.imagenes,{height:300}]}
            source={require('../../../images/Unidad5/5.1.1.png')}
            resizeMode = 'cover'
            />
            <View style={styles.titulo}> 
            <Text><H1>Costos de producción </H1></Text>          
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
            Si el negocio tiene un giro comercial exclusivamente, no se tienen costos de producción porque no se fabrica, en todo caso se tendría un costo de venta o de adquisición (el de los productos que se adquieren para revender); sin embargo, si se produce un bien en una pequeña fábrica, industria o taller, definitivamente se van a tener costos de producción.
              {"\n"}{"\n"}
              Los COSTOS de producción se integran de la siguiente manera:
              {"\n"}{"\n"}   
              Materia prima e insumos directos.
              {"\n"}{"\n"}    
              Se refiere a los materiales principales que se utilizan en la producción de un bien. En el caso de fabricar muebles de madera la materia prima es la madera, el triplay, los aglomerados etc. Los insumos directos son aquellos que se utilizan en la producción pero que no corresponden a los materiales principales (no se transforman, no se les hace cambios), en el ejemplo serían clavos, pegamentos, jaladeras, bisagras etc.
              {"\n"}{"\n"}    
              Mano de obra directa
              {"\n"}{"\n"}    
              Es aquella que interviene directamente en la transformación de materia prima en producto terminado, específicamente se refiere a los obreros (operarios de maquinaria y equipo, cortadores, pintores, soldadores, entre otros). Se debe determinar cuánto personal se requiere para el proceso productivo y cuantificar cuánto se les va a pagar, en este sentido, Baca (2006), señala que el método de costeo que se utiliza en la evaluación de proyectos se llama costeo absorbente. Lo que significa, en el caso de la mano de obra, que se deberá agregar al menos 35% de prestaciones sociales al costo total anual. 
              {"\n"}{"\n"}       
              Materiales e insumos indirectos.
              {"\n"}{"\n"}    
              Se necesitan para realizar la producción, pero que no es posible o práctico identificarlos en el producto y por lo general representan un valor muy bajo. En el ejemplo de la fábrica de muebles, podrían ser las lijas y la energía eléctrica, y en otros procesos productivos serían los combustibles, lubricantes, grasas, bandas que se requieren para la maquinaria, etc. 
              {"\n"}{"\n"}       
              Los COSTOS de producción o fabricación incluyen
              {"\n"}{"\n"}    
              Mano de obra indirecta. Personal que es necesario para la producción pero no interviene directamente en la fabricación del producto (gerentes, supervisores, jefe del taller, electricistas, mecánicos etc.). Al igual que en la mano de obra directa, de acuerdo con Baca (2006) a los sueldos y salarios por mano de obra indirecta se le agrega el 35% por concepto de prestaciones. 
              {"\n"}{"\n"}   
              Otros cargos (gastos) indirectos. Corresponde a los gastos vinculados indirectamente al proceso productivo, generalmente son pagos por servicios, como por ejemplo: la energía eléctrica que consumen las máquinas, la energía para el alumbrado de la fábrica o taller, el consumo de agua, el pago del seguro contra daños e incendios en la fábrica, el mantenimiento etc.
              {"\n"}{"\n"}                      
            </Text>          
            </View>          
        
          </ScrollView>
          </Container>
      );
    }
  }
  class unopuntodos extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Tipos de proyectos de inversión </H1></Text>          
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
              En este momento te encuentras en un lugar específico, tal vez en tu casa, en la escuela, 
              en el transporte o en cualquier otro sitio; independientemente de donde te encuentres, observa a tu alrededor
              y te darás cuenta, por la gran cantidad de bienes y servicios, de la “presencia” de varias empresas que satisfacen
              las necesidades de las personas en todos los aspectos de la vida cotidiana (vestimenta, calzado, útiles 
              escolares, tecnología, alimentos, cosméticos, transporte, energía eléctrica, entre muchos otros) .
              {"\n"}{"\n"}
              Recuerda, siempre que haya necesidades que satisfacer o problemas que resolver existe la posibilidad de realizar un 
              proyecto de inversión. Para que tengas una idea de algunas de las áreas en las que se pueden realizar proyectos de 
              inversión, te invitamos a revisar el siguiente cuadro: 
            </Text>
          </View>
            <Image
            style = {[styles.imagenes,{height:580}]}
            source={require('../../../images/1.2.png')}
            resizeMode = 'cover'
            />          
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Cabe destacar que la clasificación de los proyectos no es mutuamente excluyente y se logra combinando 
              los criterios con los que se identifica; por ejemplo, puede existir un proyecto de carácter privado, que 
              pertenezca al sector industrial, cuya área de influencia sea local, de propósito múltiple con el objetivo de
              ampliar la planta y de tamaño mediano.  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/img1.png')}
          resizeMode = 'cover'
          />
        </ScrollView>
        </Container>
      );
    }
  }
  class unopuntotres extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1>Modelos de inversiones</H1></Text>          
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
            Los modelos de inversión son un apoyo importante para el emprendedor o empresario debido a que le permiten 
            tener un mejor panorama de los futuros beneficios o posibles pérdidas que obtendrá al invertir en un proyecto 
            determinado. Estos modelos coadyuvan a disminuir los riesgos derivados de toda inversión; dada la complejidad del mundo
            de los negocios es imposible pensar que toda inversión va a ser exitosa por estar bien planeada y documentada.
            {"\n"}{"\n"}
            Existen diferentes clasificaciones de modelos de inversión, para efectos de esta UA abordaremos los siguientes:
            por su operación, por su flujo de efectivo y por su punto de vista económico.
          </Text>  
          </View>        
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/1.3.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
            <Text><H1>Por su operación </H1></Text>          
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
            Este modelo está en función del tipo de proyecto y de sus características. Por ejemplo, 
            se puede tener un proyecto para la prestación de algún servicio, para la compra-venta (comercio)
            de bienes, o para la transformación de materia prima en bienes de consumo intermedio o en bienes de consumo final.
            La operación en cada uno de estos proyectos es diferente, como también lo son el valor de la inversión y el
            tiempo necesario para ponerlos en marcha. Adicionalmente, hay que considerar que hay proyectos que se caracterizan
            por ser intensivos en capital (más automatizados) y otros por ser intensivos en mano de obra. 
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/1.3.1.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
            <Text><H1>Por su flujo de efectivo  </H1></Text>          
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
            El flujo neto de efectivo (FNE) es el efectivo que queda una vez que se restan los egresos (costos y gastos)
            a los ingresos. Antes de emprender un proyecto (realizar alguna inversión) se deben estimar los flujos netos
            de efectivo que generará dicha inversión en un período de tiempo determinado.  
            {"\n"}{"\n"}
            La decisión de emprender o no un proyecto está en función de los FNE que se generan a partir de una inversión; 
            un flujo de efectivo amplio da mayor seguridad y tranquilidad al inversionista permitiéndole cubrir los gastos y 
            costos derivados del proyecto, brindándole la posibilidad de recuperar la inversión inicial y por otro lado, tomar 
            nuevas decisiones de inversión.  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/1.3.2.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
            <Text><H1>Por punto de vista económico  </H1></Text>          
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
            Ninguna inversión está exenta de riesgo; sin embargo, lo que todo inversionista busca es maximizar utilidades; es decir, 
            que su inversión sea rentable y recuperarla en el menor tiempo posible. Antes de emprender un proyecto éste debe ser 
            evaluado desde el punto de vista económico, para determinar si es o no conveniente emprenderlo (viabilidad económico-financiera). 
            Para evaluar un proyecto de inversión existen diferentes métodos que nos permiten determinar el tiempo en que se recupera la
            inversión y calcular la rentabilidad del mismo, entre los métodos más comunes se encuentran:   
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/1.3.3.png')}
          resizeMode = 'cover'
          />
          </ScrollView>
        </Container>
      );
    }
  }
  class unopuntocuatro extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
          <Text><H1>¿Por qué son necesarios los proyectos de inversión?</H1></Text>          
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
            La respuesta a la pregunta de ¿Por qué se invierte y por qué son necesarios los proyectos?, 
            es evidente si consideramos que siempre que exista una necesidad humana que satisfacer habrá 
            la posibilidad de invertir y para ello se requiere hacer un proyecto de inversión bien estructurado y evaluado. 
          </Text>
        </View>                  
        <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/1.4.png')}
          resizeMode = 'cover'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Una vez que revisaste el tema, elabora la siguiente evidencia de aprendizaje:  
            </Text>
          </View>
          
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/EA2.png')}
          resizeMode = 'stretch'
          />
        </ScrollView>
        </Container>
      );
    }
  }
  class unopuntocinco extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
          <Text><H1> Ciclo de vida de los proyectos </H1></Text>          
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
            De acuerdo con Fernández (2010) el ciclo de vida de un proyecto tiene las siguientes fases  
          </Text>    
        </View>              
        <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/ciclo.png')}
          resizeMode = 'cover'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              El ciclo de vida de un proyecto de inversión está en función del sector al que pertenece. 
              Por ejemplo, si el proyecto es del sector privado, su ciclo empieza cuando se visualiza una 
              necesidad que debe ser satisfecha o cuando se detecta la existencia de una oportunidad de inversión. 
              En cambio, si se trata de un proyecto del sector público, el ciclo iniciará cuando se identifica la
              existencia de un problema que debe ser resuelto. 
              {"\n"}{"\n"}
              En términos generales el ciclo de vida de un proyecto está conformado por al menos cuatro fases. 
            </Text> 
          </View>         
          <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/etapa1.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/etapa2.png')}
          resizeMode = 'stretch'
          />
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/etapa3.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Por otro lado, Nacional Financiera (2001), también aborda el proceso de inversión así como 
              del ciclo de vida de un proyecto. En este sentido, la institución menciona que en los sistemas 
              socioeconómicos donde prevalecen economías de mercado, se entiende por proceso de inversión a la 
              actividad que consiste en asignar recursos económicos a fines productivos, mediante la formación 
              bruta de capital fijo, con el propósito de recuperar con creces los recursos asignados. El proceso de
              inversión comprende cuatro etapas completamente diferenciables en contenido y prácticamente sucesivas
                e irreductibles: Preinversión, decisión, inversión y recuperación.  
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/1.1.4.png')}
          resizeMode = 'stretch'
          />
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
             A continuación se explican cada una de estas etapas.   
            </Text>
          </View>
          <Image
          style = {[styles.imagenes,{height:500}]}
          source={require('../../../images/imagen9.png')}
          resizeMode = 'stretch'
          />

        </ScrollView>
        </Container>
      );
    }
  }
  class unopuntoseis extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
        <View style={styles.titulo}> 
          <Text><H1> Formulación de proyectos  </H1></Text>          
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
            La primera parte de todo proyecto de inversión deberá ser su presentación formal, 
            misma que iniciará con una breve introducción que describa la reseña histórica del desarrollo del 
            bien o servicio (incluyendo el por qué se pensó en emprenderlo vinculándolo con las condiciones 
            económicas y sociales), el target al que va dirigido, el problema que resolverá o la necesidad que
            cubrirá, los factores relevantes que influyen en su consumo, así como los principales usos del producto 
            o servicio, y finalmente, los objetivos y limitaciones del proyecto. 
            {"\n"}{"\n"}
            Todo proyecto de inversión contiene al menos cinco secciones debidamente analizadas, documentadas y evaluadas: 
          </Text> 
        </View>                
        <Image
          style = {[styles.imagenes,{height:400}]}
          source={require('../../../images/1.6.png')}
          resizeMode = 'cover'
          /> 
          <View style={styles.cuerpo}>            
            <Text style={styles.letras}>
              Estas secciones se pueden apreciar en la siguiente imagen.  
            </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:200}]}
          source={require('../../../images/2.png')}
          resizeMode = 'cover'
          /> 
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
            El objetivo general de este estudio es verificar la existencia de un mercado potencial insatisfecho y 
            la factibilidad de introducir un bien o prestar un servicio en dicho mercado.           
          </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:250}]}
          source={require('../../../images/1.6.1.png')}
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
        <View style={styles.cuerpo}>            
          <Text style={styles.letras}>
            Una vez que se ha descrito, en términos precisos, el producto o el servicio es necesario llevar 
            a cabo una serie de estudios en fuentes primarias y secundarias para obtener información acerca de la 
            oferta y la demanda tanto histórica como proyectada; se realiza un estudio de precios; se analizan y 
            se definen los canales de distribución más adecuados y finalmente, se establecen estrategias de promoción 
            y publicidad. 
          </Text> 
        </View>
          <View style={styles.titulo}> 
          <Text><H1>Estudio técnico</H1></Text>          
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
              Tiene como objetivo demostrar que tecnológicamente es posible producir un bien o prestar un servicio una vez
              que se verificó que no existe impedimento alguno en el abasto de todos los insumos necesarios para su producción.         
            </Text> 
        </View> 
          <Image
          style = {[styles.imagenes,{height:300}]}
          source={require('../../../images/1.6.2.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}> 
          <Text><H1>Estudio administrativo y de organización</H1></Text>          
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
          source={require('../../../images/1.6.3.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}>
          <Text><H1>Estudio financiero</H1></Text>          
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
          source={require('../../../images/1.6.4.png')}
          resizeMode = 'cover'
          />
          <View style={styles.titulo}>
          <Text><H1>Estudio sustentable, social y financiero</H1></Text>          
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
            Existe un compromiso mundial en cuanto a
            la necesidad de realizar estudios y evaluación
            del impacto ambiental que pueda derivarse de
            la ejecución de un proyecto, lo que permite
            tomar decisiones sobre su factibilidad ambiental. 
            El impacto ambiental se refiere a los daños o transformaciones que las
            acciones del ser humano pueden generar en la naturaleza. Cabe señalar que, 
            con el crecimiento de las sociedades industrializadas y de los centros urbanos el impacto ambiental
            es cada vez más notorio. El estudio de impacto ambiental puede hacerse en varias etapas, 
            en paralelo con las etapas del proyecto que se pretende evaluar.
          </Text> 
        </View>  
          <Image
          style = {[styles.imagenes,{height:150}]}
          source={require('../../../images/1.6.5.png')}
          resizeMode = 'cover'
          />
        </ScrollView>
      </Container>
      );
    }
  }
  class unopuntosiete extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
        <ScrollView>
          <View style={styles.titulo}> 
            <Text><H1> Técnica para la administración del proyecto Gráfica de Gantt  </H1></Text>          
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
              La gráfica de Gantt fue diseñada en 1910 por el ingeniero industrial de nacionalidad norteamericana Henry L. Gantt;
              es una herramienta utilizada para la planeación, programación y seguimiento de las actividades de un proyecto; 
              consta de un sistema de coordenadas:  
              {"\n"}{"\n"}
              Eje vertical. Se detallan las actividades o tareas del proyecto
              {"\n"}{"\n"}
              Eje horizontal. Se indican fechas en una escala de tiempo (hora, día, semana, mes, etc.)
            </Text>
          </View>                 
          <Image
            style = {[styles.imagenes,{height:150}]}
            source={require('../../../images/gantt.png')}
            resizeMode = 'cover'
            /> 
            <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                Cada actividad se representa mediante un bloque rectangular cuya longitud indica por un lado,
                la duración de cada una de las actividades y por otro, las tareas que se pueden realizar simultáneamente.
                </Text>
          </View>                   
          <Image
            style = {[styles.imagenes,{height:150}]}
            source={require('../../../images/ventajas.png')}
            resizeMode = 'cover'
            />  
            <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                La Gráfica de Gantt es el antecedente de las técnicas que existen para la administración de proyectos.
                La complejidad creciente de los proyectos actuales, ha exigido la utilización de técnicas y herramientas de
                planeación más sistemáticas y más efectivas, con el propósito de optimizar la eficiencia en la ejecución de proyectos. 
                {"\n"}{"\n"}
                Para concluir esta unidad es necesario que realices, las evidencias de aprendizale 3,4 y 5 que a continuación encontrarás: 
            </Text>
          </View>    
            
          <TouchableHighlight>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/EA3.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          
          <TouchableHighlight>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/EA4.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          
          <TouchableHighlight>
          <Image
          style = {[styles.imagenes,{height:70}]}
          source={require('../../../images/EA5.png')}
          resizeMode = 'stretch'
          />
          </TouchableHighlight>
          
          <View style={styles.cuerpo}>
              <Text style={styles.letras}>
                ¡Felicidades! ya concluiste esta unidad temática; esperamos que ahora tengas una idea más clara de: lo que son los proyectos
                de inversión, su clasificación, la razón de su importancia, su ciclo de vida, y su estructura, ésta última comprende los 
                siguientes estudios: mercado, técnico, administración y organización, financiero y finalmente, el estudio sustentable. Cada
                uno de dichos estudios requiere una exhaustiva investigación que nos brindará información y aprendizajes muy valiosos, base
                para la toma de decisiones razonadas y fundamentadas; es por esta razón por la que en esta unidad de aprendizaje dedicamos 
                una unidad temática para cada uno se estos estudios. En la siguiente unidad abordaremos el primero de ellos: el estudio de
                mercado.
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
    }
  });
  
  export default TabNavigator({
    '5.1': { screen: cincopuntouno },
    '1.2': { screen: unopuntodos },
    '1.3': { screen: unopuntotres },
    '1.4': { screen: unopuntocuatro },
    '1.5': { screen: unopuntocinco },
    '1.6': { screen: unopuntoseis },
    '1.7': { screen: unopuntosiete }
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