# Processing : clase 3 de 3

### Jueves 26 de septiembre → Sesión 7

En esta clase corresponde hacer una introducción a los conceptos básicos de electrónica, la que será aplicada en una evaluación Parcial de Processing: 

> Aprovecharemos la biblioteca `processing.serial.*`, que nos permitirá comunicarnos, a través del puerto serial, con las lecturas de un sensor que son captadas mediante un pin (A0) en una Placa Arduino Uno.

> El dato que obtengamos de esta comunicación tendrá que afectar directamente la ejecución de un sketch de Processing. 


### Conceptos básicos de electrónica: 

**De modo muy simplificado, electrónica es trabajar con la emisión, el flujo y el control de los electrones.**

Corresponde saber **algo de electrónica** para trabajar con **circuitos electrónicos**, porque estos últimos se aprovechan del flujo de electrones para la generación, transmisión, recepción, almacenamiento de datos, cumpliendo con ello el rol de sensores (*input*) o actuadores (*output*).

Veamos el siguiente ejemplo:

![Ley de Ohm](https://www.build-electronic-circuits.com/wp-content/uploads/2014/09/Ohms-law-cartoon-cropped.jpg)

En un circuito puedo afectar el flujo de electrones mediante una resistencia variable. La variable de tal resistencia dependerá de un factor externo. Por ejemplo, un [fotoresistor](https://es.wikipedia.org/wiki/Fotorresistor) es una resistencia que depende de la luminosidad.

![Fotoresistor](http://e-ducativa.catedu.es/44700165/aula/archivos/repositorio/1000/1106/html/20070822klpingtcn_247iessco.jpg)

Podríamos tener una fuente de poder que ponga electrones en un circuito. Al medio de este circuito podríamos poner un fotoresistor. Al otro extremo del circuito puedo poner un "contador" de electones. Si "cuento" los electrones que pasan después del angostamiento que provoca la fotoresistencia, puedo obtener un dato respecto de la luminosidad del lugar donde se encuentra la fotoresistencia (que podría apretar más o menos la cuerda del dibujo según la luz natural recibida). Este dato podría ser un *input*. Luego, podría interpretar tal dato para el siguiente *output*: Afectar a un [relé](https://es.wikipedia.org/wiki/Rel%C3%A9), para permitir el paso de corriente que encienda una fuente de luz artificial (de esta manera funcionan los circuitos del alumbrado público).

**Más información**

- [Conceptos básicos sobre señales eléctricas](http://www.arduino.utfsm.cl/1-conceptos-de-electronica-basica/)
- [Componentes electrónicos](https://aprendiendoarduino.wordpress.com/tag/ley-de-ohm/)
- [Voltaje, Corriente, Resistencia, y Ley de Ohm](http://cursos.mcielectronics.cl/voltaje-corriente-resistencia-y-ley-de-ohm/)


### Arduino


Arduino es un proyecto que nace en instituto Ivrea (QEPD), Italia, a comienzo del 2000. Su intención es muy parecida a la de Processing: Hacer accesible la programación y la electrónica a educadores, principiantes, diseñadores y artistas.

Arduino es un IDE, un lenguaje de Programación, una placa electrónica y una comunidad. 

Entre los distintos modelos de placa electrónica Arduino, la más popular podría ser el Arduino UNO:

![Arduino Uno](https://www.prometec.net/wp-content/uploads/2015/01/Arduino-UNO-frontal.jpg)

Pero hay muchas más [placas, módulos y kits disponibles](https://store.arduino.cc/usa/arduino/boards-modules). 




