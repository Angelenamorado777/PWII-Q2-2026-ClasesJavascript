class Planilla{
    empleados = []
    nombrePlanilla = ''

    constructor(nombrePlanilla){
        this.nombrePlanilla = nombrePlanilla
    }

    ////CRUD

    //Agregar empleados
    agregarEmpleado(empleado){
        console.log(`Agregando un nuevo empleado (${empleado.nombre}) a la planilla ${this.nombrePlanilla}`)
        this.empleados.push(empleado)
        console.log(this.empleados.length, "empleado registrados")
    }

    //Leer empleados
    obtenerEmpleadoPorId(idEmpleado){
        const resultado = this.empleados.find(empleado => empleado.id === idEmpleado)
        if(resultado){
            console.log(`Se encontró el empleado ${resultado.nombre} con id ${idEmpleado}`)
            return resultado
        }else{
            console.warn(`No se encontró el empleado con el id ${idEmpleado}`)
        }
    }

    obtenerEmpleadosEnPlanilla(){
        console.log(`Imprimiendo la planilla de empleados ${this.nombrePlanilla}`)
        this.empleados.forEach((empleado, i) =>
            console.log(`${i+1} - id: ${empleado.id}, Nombre: ${empleado.nombreCompleto}, Puesto: ${empleado.puesto}, Salario por Hora: L${empleado.salarioHora.toFixed(2)}`
            )
        )
    }

    //Modificar Empleados
    modificarSalarioHora(idEmpleado, nuevoSalarioHora){
        const resultado = this.empleados.find(empleado => empleado.id === idEmpleado)
        if(resultado){
            resultado.salarioHora = nuevoSalarioHora
            console.log(`Se modificó el salario hora del empleado ${resultado.nombre} con id ${idEmpleado} a L${nuevoSalarioHora}`)
        }else{
            console.warn(`No se encontró el empleado con el id ${idEmpleado}`)
        }
    }

    //Eliminar empleados
    eliminarEmpleados(idEmpleado){
        this.empleados = this.empleados.filter(empleado => empleado.id !== idEmpleado)
        console.log(`Se eliminó el empleado con id ${idEmpleado}`)
    }

    //Interactuar con empleados (Pagar toda la planilla)
    //Trabajo de empleado
    registrarTrabajoEmpleado(idEmpleado, cantidadHoras){
        const resultado = this.empleados.find(empleado => empleado.id === idEmpleado)
        if(resultado){
            console.log(`Registrando horas de trabajo del empleado ${resultado.nombreCompleto}`)
            resultado.trabajar(cantidadHoras)
        }else{
            console.warn(`No se encontró el empleado con el id ${idEmpleado}`)
        }
    }

    //Pagar toda la planilla
    pagarPlanilla(){
        console.log(`Iniciando pago de planilla ${this.nombrePlanilla} para la fecha ${new Date().toLocaleDateString()}`)
        this.empleados.forEach(empleado => {
            console.log(`Pagando al empleado ${empleado.nombreCompleto}`)
            empleado.cobrar()
        })
    }
}

module.exports = {Planilla}