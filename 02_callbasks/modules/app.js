/*console.log('hola mundo¿')

const numbers = [2, 3, 54, 6, 34, 2, 3]

const res1 = numbers.forEach(n=>console.log(n))

//console.log(res1)

const respuesta = numbers
    .sort()
    .map(n => n+1)
    .filter( n=> n > 6 )
    .forEach(n => console.log(n))


console.log('/n' + respuesta)
*/
//podemos importar cualquier cosa 
//como usar funciones que contienen otras archivos en este 
//a esto se lo llama pat realativo './'

const version = require('./version.js')
const procesadores = require('./numeroProcesadores.js')
const calculadora = require('./calculadoraSimple.js')
//para subier en la gerarquia de carpetas se debe 
//const calculadora = require('../../calculadoraSimple.js') 

console.log(version)
console.log(procesadores)
console.log(calculadora.sumar(4,5))
console.log(calculadora.restar(4,5))
console.log(calculadora.multiplicar(4,5))
console.log(calculadora.dividir(4,5))

//con este uso de archivos se usa npm 
//package.json es el encargado de gestionar este tipo de archivos

//cusndo se usa 
//const calculadora = require(fs)
//npm busca directamente en la carpeta de node module 
//fs es un modulo nativo de npm 
//existen paketese que se tienen que instalar npm install express

const fs = require('fs')
console.log(fs)

