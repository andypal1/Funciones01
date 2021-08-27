//Declaración de función o functionDeclaration
//function suma (){
//const resultado = 2 + 2;
//alert(`El resultado es = ${resultado}`);
//};
//Función expresada o FunctionExpression
//const suma = function (){
//    const resultado= 3 + 3;
//    alert(`El resultado de esta suma es de: ${resultado}`);
//}
//suma();

//Función flecha o arrowFunction
//Todas las funciones necesitan declaración y ejecución de la función
//declaración de la función:
//const suma = () => {
//    const resultado= 5 + 5
//    alert (`El resultado de la arrowFunction es de : ${resultado}`);
//};
//ejecución de la función:
//suma();

//const suma = () => {
//    return = 5 + 5;
//}
//console.log(suma());
//log num1= 0;
//log num2= 0;

//const suma=()=> {
//   let num1= number(prompt(Ingrese el primer número));
//   let num2= number(prompt(Ingrese el primer número));
//   const result= num1 + num2;
//   return result
//}

//const resultadoDelaSuma= suma();
//const multiplicar = () => {
//   return resultadoDelaSuma * 3;
//}
//multiplicar();

//const resultadoDeLaMultiplicacion = multiplicar();//

//Nombres
//const pedirDatos = () => {
//const nombre = prompt(`¿Cuál es su nombre?`);
//const edad = prompt(`¿Cuál es su edad?`);
//const altura = prompt(`¿Cuál es su altura?`);
//const datos= prompt(`Hola ${nombre}, tienes ${edad} años. Tu altura es de ${altura}`);
//return datos;
//}
//console.log(pedirDatos());

//const pedirDatos = () => {
  //  const nombre = prompt('Ingresa tu nombre');
    //const edad = prompt('Ingresa tu edad');
    //const altura = prompt('Ingresa tu altura');
    //const datos = `Hola ${nombre} bienvenid@ a este ejercicio. Tu edad es de: ${edad} años y tienes una altura de: ${altura} cm`;
    //return datos;
  //}


  const pedirDatos = () => {
    const nombre = prompt('Ingresa tu nombre');
    const edad = prompt('Ingresa tu edad');
    const altura = prompt('Ingresa tu altura');
    const datos = `Hola ${nombre} bienvenid@ a este ejercicio. Tu edad es de: ${edad} años y tienes una altura de: ${altura} cm`;
    console.log(datos);
    return datos;
  }
  

  //parámetros es lo que pongo entre paréntesis al principio
//const suma = (num1, num2)=>{
//return num1 + num2;
//  }
//console.log(suma (3,1));

  //const suma = (num1, num2) => {
  //  return num1 + num2;
  //}
  
 // console.log(suma(3,3)); // 6
  
 // console.log(suma(5,5)); // 10
  
 // console.log(suma(3,6)); // 9
  
 // console.log(suma(23,603)); // 626
  
 //const sumar (a,b)=> a + b;
 //console.log(Sumar(4,5))

 //const restar (num1,num2)=> num1-num2;
 //console.log(restar (3,2))

 //const esPar =(num)=> num % 2==0;

 //const esPar = (num) => num % 2 === 0;
//const esPar = num => num % 2 === 0;

//console.log(esPar(2));

//console.log(esPar(3));

// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0
//const esImpar= num => num % 2!=0;
//console.log(esImpar(3));

//const areaDeTriangulo(num1,num2)=>{
//const multiplicar (num1,num2)=> num1*num2/2;
//const dividir (multiplicar/2);
//return resultado
//}
//console.log(multiplicar(3,4));

//const areaDeTriangulo(base,altura)=> base * altura / 2;
//console.log(areaDeTriangulo(3,4));

// calcularAreaTriangulo(base, altura)
// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 6) // 15

// b * a / 2
  //  3 * 4 = 12, 12 / 2 = 6; 
  // 5 * 6 = 30, 30 / 2 = 15;


  // 1.- Crear la funcion
  // 2.- pasarle argumentos de base y altura
  // 3.- multiplicar la base por la altura
  // 4.- Tomar el resultado y dividirlo entre 2
  // 5.- Retornar ese resultado


  // const calcularAreaTriangulo = (base, altura) => {
  //   const multiplicacion = base * altura;
  //   const resultado = multiplicacion / 2;
  //   return resultado
  // }

 // const calcularAreaTriangulo = (base, altura) => base * altura / 2;



  //console.log(calcularAreaTriangulo(3, 4)) // 6
  //console.log(calcularAreaTriangulo(5, 6)) // 15

  //   gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// hola = ¡hola!

// 1.- Esccribir la funcion
// 2.- tome un string como argumnento
// 3.- Concatenar el caracter del inicio
// 4.- Concatenar el caracter del final
// 5.- Retornar el string completo


// const gritar = str => {
//   const palabra = '¡' + str + '!';
//   return palabra
// }

//const gritar = str => `¡${str}!`;

//console.log(gritar('hola'))
//console.log(gritar('aaaaaaa'))

const calcularPuntaje (num1, num2,num3)=> {
    num1 * 3 + num2*5 + num3 *10;
};

console.log (calcularPuntaje(3,0,0));