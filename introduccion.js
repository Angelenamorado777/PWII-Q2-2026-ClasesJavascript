const {Persona} = require('./src/js/models/Persona')
const {Empleado} = require('./src/js/models/Empleado')
const {Planilla} = require('./src/js/models/Planilla')

//Introduccion Clases

var saludo = "Hola mundo"
const nombre = "Luke"
let apellido = "Skywalker"


let persona = {
    id: 1,
    nombre: "Luke",
    apellido: "Skywalker",
    saludar(){
        console.log("Hola", this.nombre)
    }
}

let persona2 = {
    id: 2,
    nombre: "Leia",
    apellido: "Organa",
    saludar(){
        console.log("Hola")
    }
}

let persona3 = {
    id: 3,
    nombre: "Han",
    apellido: "Solo",
    saludar(){
        console.log("Hola")
    }
}

let persona4 = {
    id: 4,
    nombre: "R2D2",
    apellido: "Skywalker",
    saludar(){
        console.log("Hola", this.apellido)
    }
}


console.log(saludo, nombre, apellido)

console.log(persona)
console.log(persona2)
console.log(persona3)
console.log(persona4)

persona.saludar()
persona4.saludar()

console.log("Hola mundo".green)

//Introduccion arreglos

//camelCase
persona = new Persona(1, "Luke", "Skylwaker", 25, "Tatooine")
persona2 = new Persona(2, "Leia", "Organa", 25, "Coruscant")
persona3 = new Persona(3, "Han", "Solo", 32, "Taooine")
persona4 = new Persona(4, "R2D2", "Skylwaker", 50, "Tatooine")

///Arreglos - CRUD
let personas = [persona, persona2, persona3]

//Crear
personas.push(persona4)
personas.push(new Persona(5, "Persona 5", "Apellido 5", 30, "No definida"))

//Read - Leer

//Select * from Personas

//Forma 1 imprimiendo todo el arreglo
console.log(personas)

//Forma 2 ciclo for
for (let index = 0; index < personas.length; index++) {
    const resultado = personas[index];
    console.log(`Imprimiendo indice ${index}`, resultado)
}

//Forma 2 forEach //Select id, nombre from Personas 
function imprimirInformacionPersona(ppersona){
    console.log(ppersona.id, ppersona.nombre)
}

const imprimirInformacionPersonalFFB = (ppersona) => {
    console.log("Imprimiendo informacion desde una funcion de flecha")
    console.log(ppersona.id, ppersona.nombre)
}

const imprimirInformacionPersonalFF = (ppersona) => console.log(ppersona.id, ppersona.nombre)


//imprimirInformacionPersona(persona2)
//personas.forEach(imprimirInformacionPersona)
//personas.forEach(imprimirInformacionPersonalFFB)
//personas.forEach(imprimirInformacionPersonalFF)
personas.forEach(ppersona => console.log(ppersona.id, ppersona.nombre))

personas.forEach((ppersona, index) => console.log(`Imprimiendo la persona con indice: ${index}`, ppersona.id, ppersona.nombre))

personas.map((ppersona, index) => console.log(`Imprimiendo desde map la persona con indice: ${index}`, ppersona.id, ppersona.nombre))

//Todas las personas edad + 1
const resultadoEdadesForeach = personas.forEach(ppersona => console.log(ppersona.id, ppersona.nombre,`Edad original ${ppersona.edad}`, `Nueva edad ${ppersona.edad + 1}`))
console.log("Resultado foreach", resultadoEdadesForeach)

const resultadoEdadesMap = personas.map(ppersona => {
    return {
        id: ppersona.id, 
        nombre:ppersona.nombre,
        edadOriginal: ppersona.edad, 
        nuevaEdad: ppersona.edad + 1}
})
console.log("Resultado map", resultadoEdadesMap)

//Select * from Personas where id = 1
console.log(5=='5')
console.log(5==='5')

const resultado = personas.find(ppersona => ppersona.id === 5)
console.log(resultado)

const resultado2 = personas.filter(ppersona => ppersona.direccion === 'Tatooine')
console.log("Personas con apellido Tatooine", resultado2)

const resultado3 = personas.filter(ppersona => ppersona.id === 5)
console.log(resultado3)

const resultado4 = personas.filter(ppersona => ppersona.edad <= 32 && ppersona.id >= 2)
console.log("Personas menores de 32", resultado4)

//Update - Actualizar
const resultadoUpdate = personas.find(ppersona => ppersona.id === 3)
resultadoUpdate.apellido = "Acompañado"
console.log(personas)
console.log(resultadoUpdate)
console.log(personas[2])

//Delete - Eliminar
personas = personas.filter(ppersona => ppersona.id !== 2)
console.log(personas)