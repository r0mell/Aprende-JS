declare var require: any;

const rxjs = require('rxjs');
const map = require('rxjs/operators').map
const distinct = require('rxjs/operators').distinct
const concat = require('rxjs/operators').concat

//es un observavle de numeros en terminologia se usa el $

const numeros$ = rxjs.of(
    1,
    "Adrian",
    "Adrian",
    1,
    true,
    true,
    1,
    { nombre: 'Adrian' },
    1,
    [1, 2, 3],

);


/*el subscribe posee 3 funciones como el then catch de una promesa,en este caso es el ok error y el complete 
los observables toman solo uno dato del obserbable en memoria y lo ejecuta independientemente del resto(uno x uno)
los obserbable tambien acepta promesas, eventos y lo que sea....en la programacion reactiva funcional =>
regla en la programacion reactiva funcional dice que todos los daos deben ser del mismo tipo 
traten a todos los datos como el mismo dato para tener los operadores de ese tipo 
*/
//los pipe se pueden concatenar y se los puede llenar con distintos operadores 
//los operadores de los pipe se los busca por categorias, existen operadores para todo
//los obserbables se van a ejecutar hasta que uno falle si esto pasa no se va a ejecutar la funcion complete 

const nwPromesa = (correcto) => {
    return new Promise(
        (resolve, reject) => {
            if (correcto) {
                resolve('ok promesita')
            } else {
                reject('nof')
            }
        }
    );
};
const nwPromesa$ = rxjs.from(nwPromesa(false));

numeros$
    .pipe(
        concat(nwPromesa$),
    )

    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        (ok) => {
            console.log('En ok', ok);
        },
        (error) => {
            console.log('Error', error);
        },
        () => { // complete
            console.log('Completado');
        }
    );

//para capturar datos se puede usar una libreria llamada inquire 




//transformar una promesa a un obserbable con rxjs from 

//const nwPromesa$ = rxjs.from(nwPromesa(true));

/*nwPromesa$
    .subscribe(
        (ok) => {
            console.log('en promesita',ok);

        },
        (error) => {
            console.log('error en promesa',error);
        },
        () => {
            console.log('completada promesita');
        },
    )
    */



