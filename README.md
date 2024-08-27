# Encriptador de texto - ALURA Challenge ONE - JONNY JIMENEZ  

El desafío consiste en convertir cualquier texto en otro ya encriptado sigiuendo las normas establecidas por el reto para tal fin. Para  realizar  lo anterior, se realiza una verificación del contenido del texto garantizando que se cumplan las normas establecidas en el reto.
Una vez encriptado el mensaje, éste se puede copiar y posteriormente desencriptar.

## Es muy intuitiva la forma de realizar lo anteriormente mencionado:

### Paso 1: 

   Se redacta el contenido a encriptar en el campo de texto donde inicialmente aparece ` "Ingrese el texto aquí" `

### Paso 2:

   En la parte inferior donde se redactó el texto hay una advertencia: `"Solo letras minúsculas y sin acentos"`. Esto descarta mayúsculas y cualquier otro tipo de caracter. AL momento de dar click en el botón Encriptar se verifica si cumple o no con lo 
   indicado en la advertancia:
   - Si no cumple, el texto de advertencia cambiará su color a rojo y no se podrá encriptar el mensaje.
   - Si cumple, el texto de advertencia cambiará su color a verde y presentará en el campo de texto transformado  el contenido ya encriptado (el campo de texto transformado se encuentra donde inicialmente hay una imágen de una persona observando un
     objeto con una lupa, también aparece un texto que indica `"Ningún mensaje fue encontrado"` seguido por el texto `"Ingresa el texto que desees encriptar o desencriptar"`).

### Paso 3:

   Si el texto fue encriptado, el campo de texto donde inicialmente se ingresó el contenido a encriptar se limpia nuevamente, dejando el mensaje `"Ingrese el texto aquí"` (como estaba al principio)

### Paso 4:
   
   Posteriormente se puede optar por copiar el texto para ser desencriptado dando click en el botón Copiar. Esto hará que el texto encriptado pase al campo de texto donde se ingresa el contenido a ser modificado (es decir al mismo punto donde se redactó 
   inicialmente el contenido a encriptar).

### Paso 5:

   Ya con el texto en el campo a ser modificado, se procede a dar click en el en el botón Desencriptar. El texto desencriptado se mostrará en el campo de texto donde inicialmente se visualizó el texto encriptado.

## Arquitectura del programa:

- **JavaScript**: La columna vertebral de la aplicación, encargada de la lógica requerida para realizar todas las funciones.
- **HTML**: Es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.
- **CSS**: Se encarga de la apariencia de cara al usuario: Estilos de fuente, color, etc.

#### Nota: Desde Google Fonts se importan los tipos de fuentes y el símbolo de Error que aparece a la izquierda de la adventacia `"Solo letras minúsculas y sin acentos"`

