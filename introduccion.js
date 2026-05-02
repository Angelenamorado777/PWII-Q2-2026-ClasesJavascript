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