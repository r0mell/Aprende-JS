//typescrip tenemos los componentes de la  
//programacion orientado a objetos como Java 
//nunca mas se usa programacion puro de JS se lo transpila a JS

//variable en js number, strings, boleanos, underfined, null, arreglos  
//lo que se gana en ts es el tipado 
//despuesd de la variable se pone el tipo de dato
//el tipado sirve para todos los tipos de variableas a demas de json => interfaces 

const arreglo: number[] = [2, 3, 4, 4]

const edad: number = 24

//para tipar un json se realiza una interface 

let rommel:{//interface 
        nombre: string;
        apellido?: string;
        edad:number;
    } = {//json
    nombre: "rommel",
    edad: 25
}


console.log(rommel)

//para tipar la funcion lo que va a retornar 
function saludar(
    nombre: string, // REQUERIDOS
    apellido?: string,  // OPCIONALES
    ...otrosNombres: string[]): string | number { // INFINITOS
    return '';
}

let respuestaSaludar = <number> saludar('Vicente', 'Eguez', '', '', '', '');

respuestaSaludar = 1;
//respuestaSaludar = '';

const saludo = (nombre: string): number => {
    return 1;
};

//para tipar clases se lo hace a traves de interfaces 



//clase u objeto el cual posee variables un constructor y los metodos correspondientes como saludar 

class Usuario {
    protected edad: string;
    nombre;

    constructor() {

    }

    private saludar(nombre: string): string {
        return nombre;
    }
}//para instanciar una clase se lo hace:
const adrianInstancia = new Usuario();



interface UsuarioInterface{
    nombre:string;
    apellido?:string;
}

class UsuarioDummy{
    nombre:string;
    apellido?:string;
}

//para tipar a un objeto se escoge recomendablemente 
const vicente:UsuarioInterface = {
    nombre:'Vicente',
    apellido:'Eguez'
};

/*para transpilar primero se instala  npm install -g typescript 
con esto habilidamos el comando tsc
despues
tsc nombreArchivo.ts --target es2017
*/