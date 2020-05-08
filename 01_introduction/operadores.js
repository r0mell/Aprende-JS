//operadores 
//----->foreach

const numeros = [1, 2, 3, 4, 5]
const arreglo = ['A', 'b', 'C']

//no se debe a;adir una variable para iterar sin condicion y sin sumar y restar
//con esto disminuye el tiempo de codigo ademas de los for anidados 
const respuesta = arreglo
    .forEach(
        (valorActualDeLaIteracion, indice, arreglo) => {
            console.log('valor: ' + valorActualDeLaIteracion)
            console.log('valor: ' + indice)
            console.log('valor: ' + arreglo)
        }
    )

//se puede omitir los demas parametros solo se utiliza el valor actual     
const res2 = arreglo.forEach(v => console.log(v))
console.log(res2)

//------>map
//muta el arreglo o cambia y crea un nuevo arreglo 
const respuestaMap = arreglo
    .map(
        valorActual => valorActual.toUpperCase()
    ).map(
        valorActual => valorActual.toLowerCase()
    )

console.log(respuestaMap)

//operador filter 
//para comprar se va a usar el === para comparar el tipo de variable 
const arregloNumeros = [3, 6, 4, 3, 1, 7, 8, 9, 5, 6];

//
/*const mayores = arregloNumeros
    .filter(
        (valorActual) => {
            return valorActual > 5;

        }
    )*/

//al simplificar la funcion quedaria
//ademas se puede concatenar operadores 
const mayores = arregloNumeros
    .filter(valorActual => valorActual > 5)
    .map(n => n + 1)
    .filter(n => n > 7)
    .forEach(n => console.log(n))

console.log(mayores)

//nos sirve cuando solo tengamos el valor de una propiedad del objeto 
const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7)

//tendria que tener todo el objeto 
console.log(arregloNumeros.indexOf(7))
console.log(respuestaFindIndex)


const respuestaFind = arregloNumeros
    .find(v => v === 32)

console.log(respuestaFind)


//operador some

const respuestaSome = arregloNumeros
    .some(n => n % 2 === 0)

console.log(respuestaSome)

//operador every 

const respuestaEvery = arregloNumeros
    .every(n => n > 32)

console.log(respuestaEvery)

//operador reduce 
/*
const respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion, valorActualDelArreglo) => {
            return valorActualDeLaOperacion + valorActualDelArreglo
        }, 0
    )*/

const respuestaReduce = arregloNumeros
    .filter(n => n > 7)
    .reduce((a, b) => a + b, 0)

console.log(respuestaReduce)