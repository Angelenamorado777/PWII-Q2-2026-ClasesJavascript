const {Persona} = require('./Persona')

class Empleado extends Persona{
    puesto
    salarioHora = 0
    pendientePlanilla = 0
    fechaContratacion

    constructor(id, nombre, apellido, edad, direccion, puesto, salarioHora){
        super(id, nombre, apellido, edad, direccion)
        this.puesto = puesto
        this.salarioHora = salarioHora
        this.pendientePlanilla = 0
        this.fechaContratacion = new Date()
    }

    trabajar(cantidadHoras){
        this.pendientePlanilla = this.pendientePlanilla + (this.salarioHora * cantidadHoras)
        console.log(`He trabajado ${cantidadHoras} horas`)
        console.log(`Se me debe L${this.pendientePlanilla} de planilla`)
    }

    cobrar(){
        console.log(`Me han pagado L${this.pendientePlanilla} al dia de hoy ${new Date().toLocaleDateString()}`)
        this.pendientePlanilla = 0
    }

}

module.exports = {Empleado}