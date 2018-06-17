import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, WebView,
  Dimensions,
  Image,StatusBar,Linking,
  ListView,ScrollView, TouchableNativeFeedback,Alert,TouchableOpacity,TouchableWithoutFeedback,TouchableHighlight
} from 'react-native';
import {Button,Content,Container,ListItem,List,Card,Body,H1,Thumbnail,Rightpla,CardItem} from 'native-base'
import { TabNavigator } from 'react-navigation';
import ImageZoom from 'react-native-image-pan-zoom';

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
           <View style={styles.containerr, {height: 5250}}>
             <View style={styles.titulo}> 
               <Text><H1>Presupuestos para la elaboración del estudio financiero</H1></Text>          
             </View>
             <View style={styles.containerr, {height: 420}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El estudio financiero de un proyecto de inversión se hace con base en los presupuestos. Un presupuesto es una estimación en términos monetarios tanto de los ingresos como de los egresos de una empresa."+   
                  "</p>"+
                  "<p>"+
                  "El principal presupuesto de ingresos es el presupuesto de ventas; en tanto que los presupuestos de egresos son:"+
                  "</p>"+
                  "<p>"+
                  "Presupuesto de costos de producción o costo de ventas según sea el caso"+
                  "</p>"+
                  "<p>"+
                  "Presupuesto de gastos de administración"+
                  "</p>"+
                  "<p>"+
                  "Presupuesto de gastos de venta"+
                  "</p>"+
                  "<p>"+
                  "Riesgos"+
                  "</p>"+
                  "<p>"+
                  "Presupuesto de gastos financieros"+ 
                  "</p>"+
                  "<p>"+
                  "Presupuesto de pago de impuestos"+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={300}
                       imageWidth={width}
                       imageHeight={300}>
                <Image style={{width:width, height:300}}
                       source={require('../../../images/Unidad5/5.1.png')}/>
            </ImageZoom> 
            <View style={styles.titulo}> 
              <Text><H1>Presupuesto de egresos</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 310}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Así como es necesario calcular el monto de la inversión, analizar las fuentes de financiamiento y estimar los ingresos para el proyecto, también es indispensable estimar los costos y gastos (costo de producción,"+
                  "gastos de venta, gastos de administración, gastos financieros e impuestos) que se derivan de la operación (funcionamiento) del proyecto por unidad de tiempo (semana, mes, año, etc.)."+
                  "</p>"+
                  "<p>"+
                  "Solo teniendo la información anterior podrás: elaborar el presupuesto de efectivo (flujo de caja), calcular el punto de equilibrio así como los indicadores financieros que te permitirán evaluar el proyecto y así "+
                  "tomar decisiones."+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={280}
                       imageWidth={width}
                       imageHeight={280}>
                <Image style={{width:width, height:280}}
                      source={require('../../../images/Unidad5/5.1.1.png')}/>
            </ImageZoom>
            <View style={styles.titulo}> 
              <Text><H1>Costos de producción</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 1330}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Si el negocio tiene un giro comercial exclusivamente, no se tienen costos de producción porque no se fabrica, en todo caso se tendría un costo de venta o de adquisición (el de los productos que se adquieren para revender); "+
                  "sin embargo, si se produce un bien en una pequeña fábrica, industria o taller, definitivamente se van a tener costos de producción."+
                  "</p>"+
                  "<p>"+
                  "Los COSTOS de producción se integran de la siguiente manera:"+
                  "</p>"+
                  "<p>"+ 
                  "Materia prima e insumos directos."+
                  "</p>"+
                  "<p>"+    
                  "Se refiere a los materiales principales que se utilizan en la producción de un bien. En el caso de fabricar muebles de madera la materia prima es la madera, el triplay, los aglomerados etc. Los insumos directos son aquellos que se utilizan en la producción pero que no corresponden a los materiales principales (no se transforman, no se les hace cambios), en el ejemplo serían clavos, pegamentos, jaladeras, bisagras etc."+
                  "</p>"+
                  "<p>"+    
                  "Mano de obra directa"+
                  "</p>"+
                  "<p>"+    
                  "Es aquella que interviene directamente en la transformación de materia prima en producto terminado, específicamente se refiere a los obreros (operarios de maquinaria y equipo, cortadores, pintores, soldadores, entre otros). Se debe determinar cuánto personal se requiere para el proceso productivo y cuantificar cuánto se les va a pagar, en este sentido, Baca (2006), señala que el método de costeo que se utiliza en la evaluación de proyectos se llama costeo absorbente. Lo que significa, en el caso de la mano de obra, que se deberá agregar al menos 35% de prestaciones sociales al costo total anual."+ 
                  "</p>"+
                  "<p>"+       
                  "Materiales e insumos indirectos."+
                  "</p>"+
                  "<p>"+    
                  "Se necesitan para realizar la producción, pero que no es posible o práctico identificarlos en el producto y por lo general representan un valor muy bajo. En el ejemplo de la fábrica de muebles, podrían ser las lijas y la energía eléctrica, y en otros procesos productivos serían los combustibles, lubricantes, grasas, bandas que se requieren para la maquinaria, etc."+ 
                  "</p>"+
                  "<p>"+       
                  "Los COSTOS de producción o fabricación incluyen"+
                  "</p>"+
                  "<p>"+    
                  "Mano de obra indirecta. Personal que es necesario para la producción pero no interviene directamente en la fabricación del producto (gerentes, supervisores, jefe del taller, electricistas, mecánicos etc.). Al igual que en la mano de obra directa, de acuerdo con Baca (2006) a los sueldos y salarios por mano de obra indirecta se le agrega el 35% por concepto de prestaciones."+ 
                  "</p>"+
                  "<p>"+   
                  "Otros cargos (gastos) indirectos. Corresponde a los gastos vinculados indirectamente al proceso productivo, generalmente son pagos por servicios, como por ejemplo: la energía eléctrica que consumen las máquinas, la energía para el alumbrado de la fábrica o taller, el consumo de agua, el pago del seguro contra daños e incendios en la fábrica, el mantenimiento etc."+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}> 
              <Text><H1>Gastos de administración</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 120}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En este grupo entran todos los gastos en los que incurre la empresa para realizar la función de dirección y administración a excepción de los de producción y ventas. Son ejemplos de este tipo de gastos: "+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={350}
                       imageWidth={width}
                       imageHeight={350}>
                <Image style={{width:width, height:350}}
                    source={require('../../../images/Unidad5/5.1.1.3.png')}/>
            </ImageZoom>
            <View style={styles.titulo}> 
              <Text><H1>Gastos de venta</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 110}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Son los gastos que tienen que ver directamente con la venta, comercialización y distribución de los productos, o de la prestación de servicios, por ejemplo:"+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={380}
                       imageWidth={width}
                       imageHeight={380}>
                <Image style={{width:width, height:380}}
                    source={require('../../../images/Unidad5/5.1.1.4.png')}/>
            </ImageZoom>
            <View style={styles.titulo}> 
              <Text><H1>Gastos financieros</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 205}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Corresponde a los gastos relacionados con actividades de tipo financiero, siempre que éstas sean accesorias para la entidad; es decir, cuando no constituyan una actividad principal en la operación de la empresa."+
                  "</p>"+
                  "<p>"+
                  "Se consideran gastos financieros: el pago de intereses y las pérdidas derivadas de las fluctuaciones cambiarias cuando se tienen operaciones en moneda extranjera."+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={300}
                       imageWidth={width}
                       imageHeight={300}>
                <Image style={{width:width, height:300}}
                    source={require('../../../images/Unidad5/5.1.1.5.png')}/>
            </ImageZoom>
            <View style={styles.containerr, {height: 130}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Hasta el momento ya cuentas con información a cerca de los presupuestos de egresos (costo de producción, costo de ventas, gastos de administración y gastos de venta). Utiliza dichos conocimientos para elaborar la siguiente evidencia de aprendizaje:"+ 
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/jg8s2vxohivyghi/cincocinco.pdf?dl=0')}>            
              <Image
                style = {[styles.imagenes,{height:100}]}
                source={require('../../../images/Unidad5/EA5.1.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <View style={styles.titulo}> 
              <Text><H1>Impuestos</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 170}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En México el impuesto más importante que tanto personas físicas como personas morales están obligadas a pagar es el Impuesto Sobre la Renta (ISR) que está regulado por la ley del mismo nombre: Ley del Impuesto sobre la Renta. Dicho impuesto es aproximadamente de entre el 30% y 35% de las utilidades o ingresos antes de impuestos."+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:300}]}
              source={require('../../../images/Unidad5/ley.jpg')}
              resizeMode = 'cover'
            />
           </View>
          </ScrollView>
          </Container>
      );
    }
  }
  class cincopuntodos extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
           <View style={styles.containerr, {height: 1930}}>
            <View style={styles.titulo}> 
              <Text><H1>Presupuesto de ingresos o presupuesto de ventas</H1></Text>          
            </View> 
            <View style={styles.containerr, {height: 290}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Recordemos que las principales entradas de dinero de la empresa provienen de:"+
                  "</p>"+
                  "<p>"+
                  "Las ventas de productos (en el estado de resultados aparece en el rubro VENTAS)"+ 
                  "</p>"+
                  "<p>"+
                  "Ingresos derivados de la prestación de servicios (en el estado de resultados aparece en el rubro INGRESOS)"+
                  "</p>"+
                  "<p>"+
                  "En ambos casos (ventas, ingresos) son el resultado de multiplicar el precio de cada uno de los productos o servicios por la cantidad que se estima vender."+
                  "</p>" 
               }}
              />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={90}
                       imageWidth={width}
                       imageHeight={90}>
                <Image style={{width:width, height:90}}
                       source={require('../../../images/Unidad5/tabla1.png')}/>
            </ImageZoom>
            <View style={styles.containerr, {height: 270}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Nota: se consideró un incremento del 10% en el precio de un año con respecto al anterior y de un 5% en el volumen de ventas de un año con respecto al anterior."+ 
                  "</p>"+
                  "<p>"+
                  "Si vendes más de un producto y en diversas presentaciones o prestas diferentes servicios, tendrás que hacer un presupuesto para cada uno de ellos y después los sumas para que obtengas un estimado de las ventas o ingresos totales en una unidad de tiempo."+
                  "</p>"+
                  "<p>"+
                  "Después de leer este tema realiza la siguiente evidencia de aprendizaje:"+
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/3lgkte67c3yh47g/cincotres.pdf?dl=0')}> 
            <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad5/EA5.2.png')}
              resizeMode = 'cover'
            />    
            </TouchableHighlight>
            <View style={styles.titulo}> 
              <Text><H1>Volumen de producción</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 320}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El volumen de producción es la cantidad de productos que una empresa fabrica o fabricará en una unidad de tiempo. Este dato se especifica por escrito en el programa de producción que adicionalmente también contiene información sobre cuándo se debe iniciar "+
                  "y terminar cada lote de producción, qué operaciones se van a llevar a cabo, qué maquinaria se empleará, cuánto personal se requiere así como otros recursos que se necesiten."+ 
                  "</p>"+
                  "<p>"+
                  "El programa de producción se formula con base en un presupuesto de ventas, el cual puede fundamentarse en la demanda estimada y/o en la capacidad productiva de la empresa de acuerdo a su infraestructura."+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:250}]}
              source={require('../../../images/Unidad5/5.1.2.1.png')}
              resizeMode = 'cover'
            />
            <View style={styles.titulo}> 
              <Text><H1>Volumen de ventas</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 100}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El volumen de ventas es la cantidad total de bienes, productos o servicios vendidos o que se estiman vender en un periodo de tiempo, usualmente 12 meses (1 año)."+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:250}]}
              source={require('../../../images/Unidad5/5.1.2.2.png')}
              resizeMode = 'cover'
            />
           </View>
          </ScrollView>
        </Container>
      );
    }
  }
  class cincopuntotres extends React.Component {
    render() {
      return (
        <Container style={styles.fondo}>
          <ScrollView>
           <View style={styles.containerr, {height: 4170}}>
            <View style={styles.titulo}> 
              <Text><H1>Presupuesto de inversión</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Todos los emprendedores alguna vez se han hecho esta pregunta:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:250}]}
              source={require('../../../images/Unidad5/5.1.3.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 90}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "A esta cantidad total de dinero que se necesita para crear una empresa o mejorar una existente, se le llama monto de la INVERSIÓN y algunos rubros que contempla son:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:300}]}
              source={require('../../../images/Unidad5/nota.png')}
              resizeMode = 'cover'
            />
             <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La INVERSIÓN agruparse en tres grandes grupos:"+  
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:120}]}
              source={require('../../../images/Unidad5/INVERSION.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En las siguientes secciones te explicaremos en qué consiste cada uno de estos grupos."+ 
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}> 
              <Text><H1>Inversión fija</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 70}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Corresponde a la inversión que se hace en activos fijos:"+  
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:200}]}
              source={require('../../../images/Unidad5/5.1.3.1.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 270}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Recordemos que se llaman activos de larga duración o activos fijos porque la empresa los adquiere con la finalidad de usarlos en sus actividades productivas y no de venderlos."+ 
                  "</p>"+
                  "<p>"+
                  "La principal característica de la inversión fija, a excepción de los terrenos, es que se DEPRECIA lo que significa que pierde valor por su uso y por el simple transcurso del tiempo."+
                  "</p>"+
                  "<p>"+
                  "Para poder calcular la depreciación del activo de larga duración (activo fijo) hay que tener en cuenta el costo de adquisición, la vida útil y el valor de desecho."+  
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad5/costo.png')}
              resizeMode = 'cover'
            />
            <View style={styles.titulo}> 
              <Text><H1>Porcentajes de depreciación (artículo 34 ley del ISR)</H1></Text>          
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad5/tabla2.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 80}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Considera la información anterior y retomando parte de la información de las evidencias III.3 y III.4 elabora la siguiente evidencia de aprendizaje:"+  
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:80}]}
              source={require('../../../images/Unidad5/EA5.3.png')}
              resizeMode = 'cover'
            />  
            <View style={styles.titulo}> 
              <Text><H1>Inversión diferida</H1></Text>          
            </View> 
            <View style={styles.containerr, {height: 60}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La inversión diferida comprende los desembolsos que se hacen por concepto de:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:400}]}
              source={require('../../../images/Unidad5/5.1.3.2.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 165}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "La principal característica de la inversión diferida es que se AMORTIZA; es decir, se consume, se extingue o se termina y se envía al gasto "+
                  "correspondiente, impactando directamente al estado de resultados de la empresa. Por lo general, la cuota anual de amortización para los gastos "+
                  "de organización y de instalación es del 5% y 20% respectivamente."+
                  "</p>" 
               }}
              />
            </View> 
            <View style={styles.titulo}> 
              <Text><H1>Capital de trabajo</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 120}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Particularmente en el plan de inversión el capital de trabajo (en inglés working capital) es el capital necesario para financiar la operación "+
                  "de la empresa mientras se reciben los ingresos derivados de las ventas y se compone de:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:150}]}
              source={require('../../../images/Unidad5/5.1.3.3.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 470}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El proyecto una vez que se pone en marcha tiene los siguientes procesos: producción, comercialización y cobranza de las ventas que se hicieron tanto de "+
                  "contado como de crédito. En tanto que se recibe el dinero de dichas ventas la operación del proyecto tiene que continuar, para lo cual es necesario contar "+
                  "con capital de trabajo, una vez que la empresa entra en operaciones el capital de trabajo se puede componer de los siguientes rubros:"+
                  "</p>"+
                  "<p>"+
                  "Efectivo (para hacer frente a pequeños costos y gastos que vayan surgiendo e inclusive para pagar sueldos y salarios del tiempo en el que no se están recibiendo ingresos por ventas o éstos son insuficientes)"+
                  "</p>"+
                  "<p>"+  
                  "Inversiones a corto plazo"+
                  "</p>"+
                  "<p>"+
                  "Cartera o cuentas por cobrar"+
                  "</p>"+
                  "<p>"+
                  "Inventarios"+
                  "</p>"+
                  "<p>"+
                  "Contablemente el capital de trabajo es la diferencia entre el activo circulante y pasivo"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:50}]}
              source={require('../../../images/Unidad5/Formula.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 80}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El presupuesto de inversión total quedará mejor comprendido una vez que realices la siguiente evidencia de aprendizaje:"+
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/2uilrhouedzriom/cincouno.pdf?dl=0')}>
              <Image
                style = {[styles.imagenes,{height:70}]}
                source={require('../../../images/Unidad5/EA5.4.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <View style={styles.containerr, {height: 140}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "En la evidencia de aprendizaje anterior determinaste el monto de dinero requierido para la inversión total; si no cuentas con ese dinero tendrás que recurrir a algunas fuentes de financiamiento. Para que quede más claro, realiza la siguiente evidencia de aprendizaje."+
                  "</p>" 
               }}
              />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/t1guk9kh7q187cs/cincodos.pdf?dl=0')}>
            <Image
              style = {[styles.imagenes,{height:80}]}
              source={require('../../../images/Unidad5/EA5.5.png')}
              resizeMode = 'cover'
            />
            </TouchableHighlight>
           </View>
          </ScrollView>
        </Container>
      );
    }
  }
  class cincopuntocuatro extends React.Component {
    render() {
      return (
      <Container style={styles.fondo}>
        <ScrollView>
           <View style={styles.containerr, {height: 5810}}>
           <View style={styles.titulo}> 
            <Text><H1>Estados financieros proforma</H1></Text>          
           </View>
           <View style={styles.containerr, {height: 410}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "Los proforma son estados financieros que contienen el pronóstico de los probables resultados económicos que la empresa estima tener en una fecha futura; "+
                  "proporcionan información anticipada sobre la situación financiera de la empresa así como de las utilidades o pérdidas. En resumen, los estados "+
                  "proforma son estados financieros estimados, pronosticados o proyectados. Éstos proporcionan la información necesaria para poder realizar la evaluación "+
                  "financiera de un proyecto y para la toma de decisiones estratégicas; adicionalmente, presentarlos es un requisito al momento de solicitar un financiamiento, "+
                  "si éste fuera el caso normalmente se preparan los estados financieros proforma para los siguientes cinco años."+ 
                  "</p>"+
                  "<p>"+
                  "Los estados financieros proyectados son utilizados con frecuencia para el análisis de crédito; adicionalmente, pueden tener una serie de usos:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:170}]}
              source={require('../../../images/Unidad5/5.2.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "NOTA: Los estados financieros proforma se realizan con base en los presupuestos."+
                  "</p>" 
               }}
              />
            </View>
            <View style={styles.titulo}> 
              <Text><H1>Balance general de apertura (inicial)</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 470}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El balance inicial es el que se hace al momento de iniciar una empresa o un negocio, en este documento financiero se registran los activos(bienes "+
                  "y derechos de la empresa), los pasivos (deudas y obligaciones) y el capital contable (patrimonio con que se constituye e inician operaciones)."+
                  "</p>"+
                  "<p>"+
                  "Te será más fácil comprender cómo se elabora el balance general inicial con el siguiente ejemplo:"+
                  "</p>"+
                  "<p>"+
                  "Supongamos la constitución de la sociedad anónima “El Pavo de Yucatán” conformada por dos socios cada uno de los cuales aporta $20,000 pesos, ese "+
                  "dinero se utiliza para adquirir mercancías (pavos) por $35,000 y se dejan $5,000 en caja para gastos menores y algún imprevisto."+ 
                  "</p>"+
                  "<p>"+
                  "De acuerdo al plan de inversión inicial, la nueva empresa tiene contemplado adquirir algunos activos. Dado que no alcanza con las aportaciones de "+
                  "los socios, piden a una institución bancaria un financiamiento por $405,000 (a pagar en tres años) y compran los siguientes activos:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:250}]}
              source={require('../../../images/Unidad5/5.2.1.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 50}}>
              <WebView
                source={{
                  html:
                  "<style>p{text-align:justify}</style>"+
                  "<p>"+
                  "El balance general inicial quedaría así:"+
                  "</p>" 
               }}
              />
            </View>
            <Image
              style = {[styles.imagenes,{height:200}]}
              source={require('../../../images/Unidad5/Ejercicio.png')}
              resizeMode = 'cover'
            />     
            <View style={styles.titulo}> 
              <Text><H1>Balance general proforma</H1></Text>          
            </View> 
            <View style={styles.containerr, {height: 140}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "El estado de situación financiera o balance general proforma es un estado estimado, proyectado o pronosticado a una (s) fecha(s) determinada(s)."+
                    "</p>"+
                    "<p>"+
                    "Para preparar el estado de situación financiera proforma deberás basarte en:"+
                    "</p>" 
                 }}
                />
            </View>
            <Image
              style = {[styles.imagenes,{height:400}]}
              source={require('../../../images/Unidad5/5.2.2.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 110}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Para una mejor comprensión, después de que revises el siguiente tema (estado de resultado proforma) te presentamos un ejercicio para que construyas "+
                    "estados financieros proforma. Si tienes dudas al respecto, no dudes en contactarnos."+
                    "</p>" 
                 }}
                />
            </View>
            <View style={styles.titulo}> 
              <Text><H1>Estado de resultados proforma</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 620}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Como recordarás se utiliza el término proforma para indicar que se trata de un estado financiero estimado, proyectado o pronosticado. "+
                    "Para realizar un estado de resultados proforma se necesitan los pronósticos de ventas. Existen diferentes factores que se deben de "+
                    "tomar en cuenta para realizar un pronóstico de ventas, como por ejemplo proyecciones sobre la base del crecimiento histórico, el pronóstico "+
                    "del nivel de actividad económica de la empresa, la capacidad de distribución y producción de la empresa, las capacidades de sus competidores, "+
                    "la introducción de nuevos productos tanto de la empresa como de sus competidores, las campañas publicitarias, los precios, los descuentos "+
                    "promocionales, y los términos de crédito, entre otros."+ 
                    "</p>"+
                    "<p>"+
                    "Existen diferentes métodos estadísticos (series de tiempo y regresión) e incluso software como: forecast pro, wizard pro y sales up, por mencionar "+
                    "algunos, que apoyan en la realización de pronósticos de ventas. Adicionalmente a los datos que reporten estos métodos es preciso que la gerencia "+
                    "tome en cuenta otros aspectos como la experiencia y el sentido común a fin de conseguir pronósticos útiles. Cabe destacar que los analistas "+
                    "constantemente revisan y actualizan los pronósticos."+
                    "</p>"+
                    "<p>"+
                    "Para realizar el estado de resultados proforma, además del presupuesto de ventas se requieren los siguientes presupuestos:"+
                    "</p>" 
                 }}
                />
            </View>
            <Image
              style = {[styles.imagenes,{height:130}]}
              source={require('../../../images/Unidad5/5.2.3.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 180}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Con los siguientes ejercicios te quedará más claro cómo se elaboran los estados financieros proforma."+
                    "</p>"+
                    "<p>"+
                    "En este momento ya tienes un parnorama de lo que son los estados financieros proforma y de los que se debe tomar en cuenta para su elaboración, "+
                    "ahora realiza las siguientes evidencias de aprendizaje:"+
                    "</p>" 
                 }}
                />
            </View>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/tcvtcuyua23pyrj/cincoseis.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:75}]}
                source={require('../../../images/Unidad5/EA5.6.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/zyzedujoa3my3jt/cincosiete.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:80}]}
                source={require('../../../images/Unidad5/EA5.7.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/q5clgb6nfhx8zc9/cincoocho.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:90}]}
                source={require('../../../images/Unidad5/EA5.8.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/un44ln13xg67nh2/cinconueve.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:70}]}
                source={require('../../../images/Unidad5/EA5.9.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/1oivrd9jc99ge67/cincodiez.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:70}]}
                source={require('../../../images/Unidad5/EA5.10.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => Linking.openURL('https://www.dropbox.com/s/0q84zlbmxvh92gk/cincoonce.pdf?dl=0')}> 
              <Image
                style = {[styles.imagenes,{height:70}]}
                source={require('../../../images/Unidad5/EA5.11.png')}
                resizeMode = 'cover'
              />
            </TouchableHighlight>     
            <View style={styles.titulo}> 
              <Text><H1>Análisis de punto de equilibrio de operación</H1></Text>          
            </View>
            <View style={styles.containerr, {height: 250}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Es una herramienta de análisis y control financiero que muestra la relación entre el volumen de ventas y la rentabilidad operativa."+
                    "</p>"+
                    "<p>"+
                    "El punto de equilibrio operativo se encuentra cuando los ingresos generados a partir de las ventas son iguales a los costos operativos totales (I = C.T)."+
                    "</p>"+
                    "<p>"+
                    "Al calcular el punto de equilibrio operativo, estamos estimando cuántas unidades se necesitan producir y vender para no ganar y tampoco perder."+
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
                    "Representación gráfica del punto de equilibrio:"+
                    "</p>" 
                 }}
                />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={100}
                       imageWidth={width}
                       imageHeight={100}>
                <Image style={{width:width, height:100}}
                       source={require('../../../images/Unidad5/5.2.4.png')}/>
            </ImageZoom>
            <View style={styles.containerr, {height: 50}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Conceptos básicos"+
                    "</p>" 
                 }}
                />
            </View>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={200}
                       imageWidth={width}
                       imageHeight={200}>
                <Image style={{width:width, height:200}}
                       source={require('../../../images/Unidad5/conceptos.png')}/>
            </ImageZoom>
            <View style={styles.containerr, {height: 70}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Fórmulas para calcular el punto de equilibrio en número de unidades (cantidad de productos o de servicios):"+
                    "</p>" 
                 }}
                />
            </View>
            <Image
              style = {[styles.imagenes,{height:60}]}
              source={require('../../../images/Unidad5/Formula1.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 60}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Fórmulas para calcular el punto de equilibrio en unidades monetarias (dinero):"+
                    "</p>" 
                 }}
                />
            </View>
            <Image
              style = {[styles.imagenes,{height:100}]}
              source={require('../../../images/Unidad5/Formula2.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 60}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Otra forma más sencilla de obtener el punto de equilibrio en unidades monetarias (dinero) es:"+
                    "</p>" 
                 }}
                />
            </View>
            <Image
              style = {[styles.imagenes,{height:50}]}
              source={require('../../../images/Unidad5/Formula3.png')}
              resizeMode = 'cover'
            />
            <View style={styles.containerr, {height: 700}}>
                <WebView
                  source={{
                    html:
                    "<style>p{text-align:justify}</style>"+
                    "<p>"+
                    "Donde:"+
                    "</p>"+
                    "<p>"+
                    "C.F = Costos fijos"+
                    "</p>"+
                    "<p>"+
                    "M.C = margen de contribución, que se obtiene así: P.V.U - C.V.U"+
                    "</p>"+
                    "<p>"+
                    "P.V.U = Precio de venta unitario"+
                    "</p>"+
                    "<p>"+
                    "C.V.U = Costo variable unitario"+
                    "</p>"+
                    "<p>"+
                    "Como habrás notado, realizar un estudio financiero requiere de una gran cantidad de tiempo; "+
                    "sin embargo, vale la pena porque no hay otra forma de estimar la inversión requerida y sobre "+
                    "todo el monto de las utilidades que tendrá la empresa, mismas que se determinan a partir de "+
                    "la estimación de sus ingresos por ventas y de cuánto le costará (incluyendo las imposiciones "+
                    "fiscales) lograr esas ventas. Esta información financiera tendrá que someterse a evaluación "+
                    "para determinar qué tan conveniente es invertir en el proyecto; para tal efecto, existen "+
                    "métodos de los que nos podemos auxiliar para la evaluación de proyectos, tema que se verá en "+
                    "la siguiente y última unidad temática."+
                    "</p>" 
                 }}
                />
            </View>
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
      margin:7
    },
    letras:{
      color:'black'
    },
    containerr: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
    }
  });
  
  export default TabNavigator({
    '5.1': { screen: cincopuntouno },
    '5.2': { screen: cincopuntodos },
    '5.3': { screen: cincopuntotres },
    '5.4': { screen: cincopuntocuatro },
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