//typescrip tenemos los componentes de la  
//programacion orientado a objetos como Java 
//nunca mas se usa programacion puro de JS se lo transpila a JS
//variable en js number, strings, boleanos, underfined, null, arreglos  
//lo que se gana en ts es el tipado 
//despuesd de la variable se pone el tipo de dato
//el tipado sirve para todos los tipos de variableas a demas de json => interfaces 
const arreglo = [2, 3, 4, 4];
const edad = 24;
//para tipar un json se realiza una interface 
let rommel = {
    nombre: "rommel",
    edad: 25
};
console.log(rommel);
//para tipar la funcion lo que va a retornar 
function saludar(nombre, // REQUERIDOS
apellido, // OPCIONALES
...otrosNombres) {
    return '';
}
let respuestaSaludar = saludar('Vicente', 'Eguez', '', '', '', '');
respuestaSaludar = 1;
//respuestaSaludar = '';
const saludo = (nombre) => {
    return 1;
};
//para tipar clases se lo hace a traves de interfaces 
//clase u objeto el cual posee variables un constructor y los metodos correspondientes como saludar 
class Usuario {
    constructor() {
    }
    saludar(nombre) {
        return nombre;
    }
} //para instanciar una clase se lo hace:
const adrianInstancia = new Usuario();
class UsuarioDummy {
}
//para tipar a un objeto se escoge recomendablemente 
const vicente = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};
/*para transpilar primero se instala  npm install -g typescript
con esto habilidamos el comando tsc
despues
tsc nombreArchivo.ts --target es2017
*/ 
