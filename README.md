# Planillas

<h2>Caracteristicas</h2>

Esta es una aplicion de consola para poder gestionar distintas planillas.

Maneja:

- Personas
- Empleados 
- Planillas

[Sintaxis Markdown](https://markdown.es/sintaxis-markdown/)

## Instrucciones

Para ejecutar utilice el comando

```bash
npm i
npm start
```

## Ejemplos

En el archivo **index.js**, puede encontrar un ejemplo de como pagar una planilla

A continuacion una muestra:

```javascript
var colors = require('colors');
const {Persona} = require('./src/models/Persona')
const {Empleado} = require('./src/models/Empleado')
const {Planilla} = require('./src/models/Planilla')

//
let empleado6 = new Empleado(6, "Rei", "Skywalker", 20, "Un lugar", "Programador Junior", 100)
let empleado7 = new Empleado(7, "Kylo", "Ren", 20, "Otro lugar", "Programador Senior", 200)
let empleado8 = new Empleado(8, "Ben", "Solo", 23, "Alcon Milenario", "Programador Fullstack", 300)


planilla.obtenerEmpleadosEnPlanilla()

planilla.registrarTrabajoEmpleado(5, 10)
planilla.registrarTrabajoEmpleado(5, 10)
planilla.registrarTrabajoEmpleado(5, 10)
planilla.registrarTrabajoEmpleado(5, 8)
planilla.registrarTrabajoEmpleado(5, 10)

planilla.registrarTrabajoEmpleado(7, 12)
planilla.registrarTrabajoEmpleado(7, 13)

planilla.pagarPlanilla()
```
