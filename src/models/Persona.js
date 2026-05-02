//Clases
class Persona{
    //Propiedades - Atributos
    id = 0
    nombre = "No definido"
    apellido
    edad
    direccion
    fechaCreacion

    //Metodos - Funciones
    //Constructor
    constructor(id, nombre, apellido, edad, direccion){
        //console.log("Instanciando una nueva persona")
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaCreacion = new Date()
        //this.nombreCompleto = `${this.nombre} ${this.apellido}`
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombreCompleto}`)
        //console.log("Hola, mi nombre es" + this.nombre + "Mucho gusto")
    }

    decirInformacionPersonal(){
        console.log(`Tengo ${this.edad} años y vivo en ${this.direccion}`)
    }

    presentarse(nombre){
        console.log(`Mucho gusto ${nombre}`)
        this.saludar()
        this.decirInformacionPersonal()
    }

    aniversario(){
        this.edad = this.edad + 1
        console.log(`Acabo de cumplir años el dia de hoy ${new Date().toLocaleDateString()}, ahora tengo ${this.edad} años.`)
    }

}

module.exports = {Persona}