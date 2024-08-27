// Reglas de conversión de caracteres:
 
const conversorCaracter = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat'};
  
  //Aquí se asignarán todos los valores iniciales a las variables.

  async function condicionesIniciales(){

    //La función async se utiliza para definir una función asíncrona y se seguira utilizando en adelante.

    //Si declaramos la funcion de forma normal en JS ...
    
    // Debemos tener en cuenta aquí que el navegador recorre efectivamente el programa una línea a la vez, en el orden en que lo escribimos;
    // En cada punto, el navegador espera a que la línea termine su trabajo antes de pasar a la siguiente línea; 
    // Tiene que hacer esto porque cada línea depende del trabajo realizado en las líneas anteriores
    // Todo lo anterior hace que este sea un programa sincrónico
    // Ahora, si la función síncrona toma mucho tiempo (es de larga duración), se vuelve muy ineficiente.
    // Al ser un solo subproceso, es un solo hilo. Un hilo es una secuencia de instrucciones que sigue un programa.
    // Debido a que el programa consta de un solo hilo, solo puede hacer una cosa a la vez:
    // por lo tanto, si está esperando que la función regrese nuestra llamada sincrónica de larga duración, no puede hacer nada más.
    // Lo que necesitamos es una manera para que nuestro programa:
      // Inicie una operación de larga duración llamando a una función.
      // Haga que esa función inicie la operación y regrese inmediatamente, para que nuestro programa aún pueda responder a otros eventos.
      // Haga que la función ejecute la operación de una manera que no bloquee el hilo principal, por ejemplo iniciando un nuevo hilo.
      // Notificarnos con el resultado de la operación cuando finalmente se complete.
    // Y es exactamente todo lo anterior lo que realiza una función asíncrona.

    LetrasParaReemplazar =  "aeiou";
 
    LetrasReemplazadas = new RegExp(`[${LetrasParaReemplazar}]`, 'g');

    //RegExp es un objeto en JavaScript que se utiliza para trabajar con expresiones regulares  y se seguira utilizando en adelante.
    //Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. 
    
    //Desglose de la Expresión:

      //new : Báciamente, el operador new permite crear el  Objeto 
      //RegExp(...) : El objeto RegExp se utiliza para hacer coincidir texto con un patrón.

      //En este caso, se está creando una nueva instancia de RegExp con un patrón dinámico y una flags ('g').

        // Patrón Dinámico:

          //`[${LetrasParaReemplazar}]` : La expresión entre comillas invertidas es una plantilla de cadena que permite interpolar variables dentro de la cadena.
            //${LetrasParaReemplazar}: Aquí se está interpolando la variable previamente definida.
            //El patrón completo resultante de la interpolación será una cadena en la que se usa el conjunto de caracteres proporcionado en la variable previamente definida.
          //'g' : Este es el flag de búsqueda global. Permite que la búsqueda de coincidencias se realice en toda la cadena y no se detenga en la primera coincidencia.

      //FLAG: Es una variable que se emplea en programación para que un programa o aplicación sepa que se cumple una condición determinada; 
      //sirve como una variable booleana e indica que una condición es verdadera o falsa.
      
      //Plantillas literales (plantillas de cadenas): Las plantillas literales se delimitan con el caracter de comillas o tildes invertidas (` `);
      //las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (${expresión}); 
      //las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.
   
    ValidadorDeLetrasIngresadas = new RegExp("^[a-z ]+$"); 

    //Desglose de la Expresión:

      //new : Báciamente, el operador new permite crear el  Objeto 
      //RegExp(...) : El objeto RegExp se utiliza para hacer coincidir texto con un patrón.

      //En este caso se está creando una nueva instancia de RegExp con el patrón "^[a-z ]+$"

        //Patrón de la Expresión Regular:

          //^: Este es el ancla de inicio. Asegura que la coincidencia debe comenzar al principio de la cadena.
          //[a-z ]: Este es un conjunto de caracteres.
            //a-z: Coincide con cualquier letra minúscula del alfabeto.
            //(espacio): Incluye el espacio como un carácter válido en la coincidencia.
          //+: Este es un cuantificador que indica que el patrón anterior ([a-z ]) debe aparecer al menos una vez y puede repetirse múltiples veces.
          //$: Este es el ancla de final. Asegura que la coincidencia debe terminar al final de la cadena.

      //Caracteres Especiales: Cuando la búsqueda de una coincidencia requiere algo más que una coincidencia exacta, puedes incluir caracteres especiales en el patrón.
      //Para el caso en particular los caracteres especiales empleados son conocidos como ASERCIONES 
      //Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras, y otros patrones que indican de alguna manera que el reconocimiento es posible.
      // ^ : Es una aserción de tipo límete para hacer coincidir al comienzo de la entrada.
      // $ : Es una aserción de tipo límete para hacer coincidir al final de la entrada.

    //En resumen: La expresión regular ^[a-z ]+$ se utiliza para validar cadenas de texto en JavaScript y tiene las siguientes características:
      //Coincide con: Cadenas que solo contienen letras minúsculas (a-z) y espacios.
      //No coincide con: Cadenas que contengan caracteres diferentes, como letras mayúsculas, números o signos de puntuación.
      //También no coincidirá con cadenas vacías o cadenas que contengan caracteres no permitidos antes o después de los caracteres permitidos.

    mensajeDeAlerta= "Solo letras minúsculas y sin acentos";
  }
  
  // Parte del programa que se encargará de encriptar / desencriptar
  async function funcionDelBoton(click){
     
      //Se declaran las variables del texto a encriptar/desencriptar 
      let textoEncriptado ="";
      const textoaprocesar = encontraValorElemento("mensaje");
  
      // Parte del programa que se encarga de verificar que el texto que se redactó cumple con todos los requisitos establecidos.
       
      if(!ValidadorDeLetrasIngresadas.test(textoaprocesar)){ 
          document.getElementById("advertencia").style.color = "#ff0000";         
          asignarTextoElemento("mensajeDeAlerta", await traducirTexto( `${mensajeDeAlerta}`) );
          sinResultado();
          return false;

      // Se encarga que el texto ingresado cumpla con lo siguiente:
        // 1. Acepta SOLO letras minúsculas (a-z) y espacios.
        // 2. No acepta letras mayúsculas, números signos de puntuación u otros caracteres diferentes a los enunciados en el numeral 1.
      // Muestra el texto de advertencia en color rojo
      // ejecuta la función "sinResultado" descrita mas adelante
      // Se devuelve "false", lo que indica que NO se cumplió lo requerido, deteniendo el envío de una respuesta (encriptada/desencriptada).
  
      } else {
  
          if(click=='encriptar'){
            
            // Cuando se puede encriptar el texto redactado
            
              textoEncriptado = encriptar(textoaprocesar);             
              if(document.getElementById('textoConvertido').innerHTML!=""){
                document.getElementById('desencriptar').removeAttribute('disabled');

                //El texto es encriptado y es mostrado en la pantalla
                //El botón de desencriptar es activado.


              }else{
                document.getElementById('desencriptar').setAttribute('disabled','true');

                //Continua con el botón "desencriptar" deshabilitado.
              }
                        
          }else if(click=='desencriptar'){
            
            // Para desencriptar el texto previamente encriptado

              textoEncriptado = desencriptar( textoaprocesar);
              if(document.getElementById('textoConvertido').innerHTML!=""){
                document.getElementById('desencriptar').removeAttribute('disabled');

                //El texto es desencriptado y es mostrado en la pantalla.
                //El botón de desencriptar es activado.

              }else{
                document.getElementById('desencriptar').setAttribute('disabled','true');

                //Continua con el botón "desencriptar" deshabilitado.
              }
                                               
          }
         
         conResultado();

         // Se invoca la función "conResultado" cuando hay un mensaje encriptado o desencriptado, según sea el caso; esta función será definida más adelante
             
         asignarTextoElemento("textoConvertido",textoEncriptado);
         document.getElementById("advertencia").style.color = "#228B22"
         
         //El texto encriptado/desencriptado se muestra en la pantalla.
         // Muestra el texto de advertencia en color verde

      }
           
  }
  
  // Cuando NO hay un mensaje encriptado o desencriptado 
  function sinResultado() {
    
    document.getElementById('areaSeccionDeRespuestaCondicionesIniciales').removeAttribute('hidden');
    document.getElementById('areaDeRespuesta').setAttribute('hidden','true');
    document.getElementById('desencriptar').setAttribute('disabled','true');
    document.getElementById('encriptar').removeAttribute('disabled');
    // Deja visible las imágenes y los textos (en condiciones iniciales) de la sección donde se da el resultado de la encriptación o desencriptación, según sea el caso
    // El botón "desencriptar" queda deshabilitado
    // Deja habilitado el botón "encriptar"
  
  }
  
   // Cuando hay un mensaje encriptado o desencriptado
  function conResultado() {
   
    document.getElementById('mensaje').value = '';
    document.getElementById('areaDeRespuesta').removeAttribute('hidden');        
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('areaSeccionDeRespuestaCondicionesIniciales').setAttribute('hidden','true'); 
    // Se reestablece el texto "Ingrese el texto aqui" en el área donde se ingresaron los caracteres a ser encriptados o desencriptados, según sea el caso
    // Oculta las imágenes y los textos (en condiciones iniciales) de la sección donde se da el resultado de la encriptación o desencriptación, según sea el caso
    // Muestra el mensaje encriptado o desencriptado, en la sección donde se encontraban las imágenes y los textos (en condiciones iniciales)
    // Deja habilitado el botón "copiar"
  
  }
  
  // Proceso de encriptación - Declaración de la funcion "encriptar" 
  // Busca en el mensaje a encriptar aquellos caracteres que se deben cambiar para que se encripte el mensaje (LetrasParaReemplazar), siguiendo el criterio establecido (conversorCaracter)
  // Por cada coincidencia encontrada, se ejecuta la función de flecha (match) => conversorCaracter[match], 
  // que toma la coincidencia y la reemplaza por el valor correspondiente (conversorCaracter).
  
  function encriptar(textoaprocesar) {
    
    return textoaprocesar.replace(
      LetrasReemplazadas,
      (match) => conversorCaracter[match]
    );
  }
  
  // Proceso de desencripación - Declaración de la funcion "desencriptar" 

  function desencriptar(textoaprocesar) {
    
    const reemplazosInversos = {};
    for (const vocal in conversorCaracter) {
      reemplazosInversos[conversorCaracter[vocal]] = vocal;
    }
   
  // Se declara "reemplazosInversos" el cual inicialmente es un Objeto vacio.

  // "for (const vocal in conversorCaracter) {reemplazosInversos[conversorCaracter[vocal]] = vocal;}"
  // A partir del Objeto "conversorCaracter" que contiene las reglas originales de encriptación,
  // Para cada clave identificada con la variable "vocal",
  // asigna su valor como clave en "reemplazosInversos", y la clave original (vocal) se convierte en el valor.
  // En otras palabras, se pasa de tener:

      // const conversorCaracter = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat'};

      //por:

      // const reemplazosInversos = { 'ai': a, 'enter': e, 'imes': i, 'ober': o, 'ufat': u};

    const regex = new RegExp(Object.keys(reemplazosInversos).join("|"), "g");

    // Construcción del regex para buscar coincidencias:

    // Object.keys() : es un método en js que devuelve un array de las claves de un objeto.

        // Siendo, const reemplazosInversos = { 'ai': a, 'enter': e, 'imes': i, 'ober': o, 'ufat': u};

        // quedaría como:

        // ['ai', 'enter', 'imes', 'ober', 'ufat']


    // .join("|") : 
        // El método .join() se utiliza en los arrays para combinar todos sus elementos en una única cadena.
        // El argumento de .join() define el separador que se colocará entre los elementos.
        // En este caso, se usa el carácter "|" (barra vertical), que en las expresiones regulares representa una opción lógica o alternativa, es decir, "o".
        // El resultado de .join("|") es una cadena que combina todas las claves del array separadas por este símbolo-

            // Para nuestro caso, pasaríamos de tener  a:

            // ['ai', 'enter', 'imes', 'ober', 'ufat']

            // Por la siguiente cadena:

            // "ai|enter|imes|ober|ufat"

      // new RegExp(..., "g") : el modificador "g" asegura que se buscarán todas las coincidencias en el texto, no solo la primera.
      
    return textoaprocesar.replace(regex, (match) => reemplazosInversos[match]);

      // textoaprocesar.replace : función de reemplazo dinámico para decidir qué hacer con cada coincidencia.
      // regex es la expresión regular que fue creada anteriormente en el código usando:
          // const regex = new RegExp(Object.keys(reemplazosInversos).join("|"), "g");
          // regex se utiliza para buscar todas las coincidencias dentro de la cadena "textoaprocesar" correspondientes a los valores claves en "reemplazosInversos".
      // Función de reemplazo: (match) => reemplazosInversos[match]:
          // Esta es una función de flecha que se ejecuta cada vez que se encuentra una coincidencia en el texto:
            // Entrada: La coincidencia encontrada en el texto.
            // Salida: El valor que corresponde a esa coincidencia en "reemplazosInversos".
  }
  
  
  //Función para asignar texto a un elemento HTML

  function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
  }
  
  //Funcion que obtiene el valor de un elemento HTML
  
  function encontraValorElemento(elemento) {
    return document.getElementById(elemento).value;    
  }
  
  //Copiar el contenido del elemento HTML al portapapeles y, luego, leer y mostrar el texto del portapapeles.

  async function copiarportapapeles() {
  
    const elementoHTML = document.getElementById("textoConvertido");
    navigator.clipboard.writeText(elementoHTML.innerText);

    try {
      const text = await navigator.clipboard.readText();
      console.log("Texto del portapapeles:", text);
      document.getElementById("mensaje").value = text;
    } catch (err) {
      console.error("Error al leer del portapapeles:", err);
    }
  
  }
  
  
  // Esta linea es para inicializar parametros generales
  condicionesIniciales();