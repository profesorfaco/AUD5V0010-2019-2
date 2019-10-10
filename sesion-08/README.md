# Arduino : clase 1 de 4

### Jueves 03 de octubre → Sesión 8

**De modo muy simplificado, trabajar con electrónica es trabajar con la emisión, el flujo y el control de los electrones.**

Corresponde saber **algo de electrónica** para trabajar con **circuitos electrónicos**, porque estos últimos se aprovechan del flujo de electrones para la generación, transmisión, recepción, almacenamiento de datos, cumpliendo con ello el rol de sensores (*input*) o actuadores (*output*).

Cuando trabajamos con electrónica, lo que hacemos es algo como esto:

![Ley de Ohm](https://www.build-electronic-circuits.com/wp-content/uploads/2014/09/Ohms-law-cartoon-cropped.jpg)

En un circuito electrónico podemos afectar el flujo de electrones mediante una resistencia variable. La variable de tal resistencia dependerá de un factor externo. Por ejemplo, un [fotoresistor](https://es.wikipedia.org/wiki/Fotorresistor) es una resistencia que depende de la luminosidad.

![Fotoresistor](http://e-ducativa.catedu.es/44700165/aula/archivos/repositorio/1000/1106/html/20070822klpingtcn_247iessco.jpg)

Podríamos tener una fuente de poder que ponga electrones en un circuito. Al medio de este circuito podríamos poner un fotoresistor. Al otro extremo del circuito puedo poner un "contador" de electones. Si "cuento" los electrones que pasan después del angostamiento que provoca la fotoresistencia, puedo obtener un dato respecto de la luminosidad del lugar donde se encuentra la fotoresistencia (que podría apretar más o menos la cuerda del dibujo según la luz natural recibida). Este dato podría ser un *input*. Luego, podría interpretar tal dato para el siguiente *output*: Afectar a un [relé](https://es.wikipedia.org/wiki/Rel%C3%A9), para permitir el paso de corriente que encienda una fuente de luz artificial (de esta manera funcionan los circuitos del alumbrado público).

### Arduino

Arduino es un proyecto que nace en instituto Ivrea (QEPD), Italia, a comienzo del 2000. Su intención es muy parecida a la de Processing: Hacer accesible la programación y la electrónica a educadores, principiantes, diseñadores y artistas.

Arduino es un IDE, un lenguaje de Programación, una placa electrónica y una comunidad. 

Entre los distintos modelos de placa electrónica Arduino, la más popular podría ser el Arduino UNO:

![Arduino Uno](https://www.prometec.net/wp-content/uploads/2015/01/Arduino-UNO-frontal.jpg)

Pero hay muchas más [placas, módulos y kits disponibles](https://store.arduino.cc/usa/arduino/boards-modules). 

```
// Llamado a *bibliotecas
// Declaración de variables globales
// Globales se usan en setup() y loop()
// Locales son las que se crean y usan solo en un contexto

void setup() {
  // Lo que se ejecuta una vez
}

void loop() {
  // Lo que se ejecutará una y otra vez en la placa
}


/*

Hacer trabajar a Arduino con Processing, es sencillo
Hacer trabajar a Arduino con p5.js no es tan sencillo: 
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/

*/

```

-----------

[Sesión 9 →](https://github.com/profesorfaco/AUD5V0010-2019-2/tree/gh-pages/sesion-09)
