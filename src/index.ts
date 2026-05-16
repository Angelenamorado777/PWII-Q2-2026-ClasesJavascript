import { IPersona } from "./models/interfaces/IPersona"
import { Persona } from "./models/clases/Persona"
import { IPasatiempo } from "./models/interfaces/IPasatiempo"
import { Pasatiempo } from "./models/clases/Pasatiempo"
import { IPertenencia } from "./models/interfaces/IPertenencia"
import { Pertenencia } from "./models/clases/Pertenencia"

let pasatiempo: IPasatiempo = new Pasatiempo(1, "Jugar videojuegos", "Entretenimiento")
let pasatiempo2: IPasatiempo = new Pasatiempo(2, "Practicar deporte", "Actividad fisica")

let pertenencia: IPertenencia = new Pertenencia(1, "Mochila")
let pertenencia2: IPertenencia = new Pertenencia(2, "Playstation")
let pertenencia3: IPertenencia = new Pertenencia(3, "Celular")

let persona: IPersona = new Persona(1, "Luke", "Skywalker", 25, pasatiempo)
let persona2: IPersona = new Persona(2, "Leia", "Organa", 25, pasatiempo2)

persona.pertencias.push(pertenencia)

persona2.pertencias.push(pertenencia2)
persona2.pertencias.push(pertenencia3)

persona.direccion = "Nueva direccion"

persona.saludar()
persona.presentarse("Luke skywalker")
console.log(persona.retornarEdad())

console.log(persona)
console.log(persona2)

// var _persona: IPersona = {
//     id: 1,
//     nombre: "Hola",
//     apellido: "Hola",
//     edad: 2,
//     direccion: "Prueba",
//     estado: "Activo",
//     observacion: "Ninguna",
//     nacimiento: new Date(),
//     saludar: function (): void {
        
//     },
//     presentarse: function (nombre: string): void {
//         console.log(nombre)
//     },
//     retornarEdad: function (): number {
//         return this.edad
//     }
// }


