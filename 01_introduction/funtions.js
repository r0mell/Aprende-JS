function restar(a, b) { return a - b }
console.log("hola mundo")

console.log(restar(4, 2)) //Ejecucion  undefined
console.log(typeof restar) //tipo de una funcion = funtion 

/* Existen diferentes tipos 
string, booleano, number, object, undefined, funtion */
console.log(restar) //Definicion de la funcion que es lo que va hacer la funcion [funtion: restar]



//Anonymous Funtion no se utilizan este tipo de funciones   

var ejemplo = function () { } //funtion anonima carece de nombre no sire ponerle nombre 
//una AF igualarles a un objeto js 

var rommel = {
    trabajo: function () {
    }
}

rommel.trabajo();

var arreglo = [
    function () {

        //cualquier implementacion 
    }
];

arreglo[0]();

//tipos de variables 
var variable; // nunca mas 
let variable = 2 //desde siempre por problemas del motor del compilador closhur 
const global = 29;
/*global = 2 ; no se puede reasicnar a la variable simpre que se pueda const 
no se puede reasicnar a varios tipos de variavles como number, string, boolean, null , funtion 
no pueden ser reasicnados nu\ingun tipo pero se puede reasicnar 
un objeto no puede mutar pero sus propiedades si se pueden modificar */


//fat arrow funtion 
//closhure 

const elevarAlCuadrado = (numero) => {
    return numero * numero
}
const elevarAlCuadradoV2 = (numero) => numero * numero;

const elevarAlCuadradoV3 = numero =>numero * numero;

const restarDosNumeros = (numUno, numDos) => numUno - numDos;













