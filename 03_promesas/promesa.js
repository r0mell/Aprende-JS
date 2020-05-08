/*una promesa tiene un resolve y un regect 
****resolv cunado todo esta bien 
****regect cuando algo sale mal 
las promesas eliminan los callbacks hell los cuales usan fat arrow funtions 
ya no se usan callbacks ya que se deben convertir en promesas 
pero despues se puede usar obserbables que junto con las promesas solucionan varios problemas ademas de hacer mas 
legible el codigo a escribir 
*/

/*En este ejercicio se tiene que recibir un arreglo del tipo ['A','B','C']
se crea un archivo por cada valor del arreglo con el nombre 0-A.txt 
por ultimo se guardan las respuestas en el formato 
 const respuesta = {
  nombreArchivo:''
  contenidoArchivo:''
  error:''
}
scope hace la diferencia entre el var y el let 
junto con el const hace referencia al uso de variable dentro de las funciones 

todo este ejercicio se resolvio con callbacks ahora se debe transformar en una promesa 
*/

//para empezar se importa la libreria ya integrada en node fs la cual maneja los file system 
const fs = require('fs')


/*
function ejercicio(arregloStrings, callback) {

    const respuestas = [];
    arregloStrings
        .forEach(
            (string, indice) => {
                const nombreArchivo = `${indice} - ${string}.txt`;
                const contenido = string
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {

                        const respuesta = {
                            nombreArchivo: nombreArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                        };
                        respuestas.push(respuesta)

                        const condicionCompletoArreglo = respuestas.length === arregloStrings.length
                        if (condicionCompletoArreglo) {
                            callback(respuestas)
                        }
                    }

                )
            }
        );
}

ejercicio(
    ['A', 'B', 'C'],
    (respuestaEjercicio) => { console.log(respuestaEjercicio) })
*/

/*para dar solucion atraves de promesas se creo una variable que contiene el arreglo a manejar   
se crea la promesa del ejercicio. primero se llaman a los argumentos que necesitara la promesa 
despues se retorna la promesa la cual contiene el resolve y reject 
en el resolve se ejecuta el codigo para la creacion de los archivos y otras caracteristicas del ejercicio
cuando se maneja archivos como writeFile en el error se dice si hay un error comuniquelo 
caso contrario crea los archivos y el arreglo con los resultados cuando los dos arreglos son iguales 
entra en true de la condicion y al resolve 
*/

const arregloStrings = ['A', 'B', 'C','D', 'E']


const promesaEjercicio = (arregloStrings) => {
    return new Promise(
        (resolve, reject) => {

            const respuestas = [];

            arregloStrings
                .forEach(
                    (string, indice) => {
                        const nombreArchivo = `${indice} - ${string}.txt`;
                        const contenido = string
                        fs.writeFile(
                            nombreArchivo,
                            contenido,
                            (err) => {
                                if (err) {
                                    reject('a ocurrido un error')

                                } else {
                                    const respuesta = {
                                        nombreArchivo: nombreArchivo,
                                        contenidoArchivo: contenido,
                                        error: err,
                                    };

                                    respuestas.push(respuesta)

                                    const condicionCompletoArreglo = respuestas.length === arregloStrings.length
                                    if (condicionCompletoArreglo) {
                                        resolve(respuestas)
                                    }
                                }
                            }

                        )
                    }

                )
        }
    )
}

/*para ejecutar la promesa se la llama, si necesita argumentos se los pone entre parentesis 
.then captura la correcta ejecucion de la promesa 
.catch captura los posibles errores que pudieron cometerse como que no exixte contenido del archivo 
*/

promesaEjercicio(arregloStrings)
    .then((response) => {
        //Aqui deberia llegar el arreglo con la solucion del ejercicio para roceder a imprimirlo
        console.log('Respuesta del ejercicio', response)

    }
    ).catch((error) => {
        console.log('Ocurrio un error:', error)
    })








