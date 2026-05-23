var colors = require('colors');
const {Persona} = require('./src/models/Persona')
const {Empleado} = require('./src/models/Empleado')
const {Planilla} = require('./src/models/Planilla')


//camelCase
let persona = new Persona(1, "Luke", "Skylwaker", 25, "Tatooine")
let persona2 = new Persona(2, "Leia", "Organa", 25, "Coruscant")
let persona3 = new Persona(3, "Han", "Solo", 32, "Taooine")
let persona4 = new Persona(4, "R2D2", "Skylwaker", 50, "Tatooine")


//Persona
// console.log(persona)
// console.log(persona2)
// console.log(persona3)
// console.log(persona4)

// persona.saludar()

// persona.nombre = "Darth"
// persona.apellido = "Vader"

// persona.saludar()

// persona2.saludar()

// persona3.presentarse(persona.nombreCompleto)

// persona3.aniversario()


//Empleado
let empleado5 = new Empleado(5, "Anakin", "Skywalker", 45, "Death star", "Programador", 100)
// console.log(empleado5)

// empleado5.aniversario()
// empleado5.presentarse(persona.nombreCompleto)

// empleado5.trabajar(8)
// empleado5.trabajar(10)
// empleado5.trabajar(2)
// empleado5.trabajar(5)
// empleado5.cobrar()
// empleado5.trabajar(2)

//
let empleado6 = new Empleado(6, "Rei", "Skywalker", 20, "Un lugar", "Programador Junior", 100)
let empleado7 = new Empleado(7, "Kylo", "Ren", 20, "Otro lugar", "Programador Senior", 200)
let empleado8 = new Empleado(8, "Ben", "Solo", 23, "Alcon Milenario", "Programador Fullstack", 300)

//Planilla
const planilla = new Planilla("Estudiantes de Programacion Web II")

planilla.agregarEmpleado(empleado5)
planilla.agregarEmpleado(empleado6)
planilla.agregarEmpleado(empleado7)

console.log(planilla.obtenerEmpleadoPorId(5))
planilla.modificarSalarioHora(5, 150)
console.log(planilla.obtenerEmpleadoPorId(5))


planilla.obtenerEmpleadosEnPlanilla()

planilla.eliminarEmpleados(6)

planilla.obtenerEmpleadosEnPlanilla()