var colors = require('colors');
const {Persona} = require('./src/models/Persona')
const {Empleado} = require('./src/models/Empleado')

//camelCase
let persona = new Persona(1, "Luke", "Skylwaker", 25, "Tatooine")
let persona2 = new Persona(2, "Leia", "Organa", 25, "Coruscant")
let persona3 = new Persona(3, "Han", "Solo", 32, "Taooine")
let persona4 = new Persona(4, "R2D2", "Skylwaker", 50, "Tatooine")

//Persona
console.log(persona)
console.log(persona2)
console.log(persona3)
console.log(persona4)

persona.saludar()

persona.nombre = "Darth"
persona.apellido = "Vader"

persona.saludar()

persona2.saludar()

persona3.presentarse(persona.nombreCompleto)

persona3.aniversario()


//Empleado
let empleado = new Empleado(5, "Anakin", "Skywalker", 45, "Death star", "Programador", 100)
console.log(empleado)

empleado.aniversario()
empleado.presentarse(persona.nombreCompleto)

empleado.trabajar(8)
empleado.trabajar(10)
empleado.trabajar(2)
empleado.trabajar(5)
empleado.cobrar()
empleado.trabajar(2)