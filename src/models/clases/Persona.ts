import { IPasatiempo } from "../interfaces/IPasatiempo";
import { IPersona } from "../interfaces/IPersona";
import { IPertenencia } from "../interfaces/IPertenencia";

export class Persona implements IPersona {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string | null;
    estado: "Activo" | "Inactivo";
    observacion?: string | undefined;
    nacimiento: Date;
    pasatiempo: IPasatiempo;
    pertencias: IPertenencia[];

    constructor(id: number, nombre: string, apellido: string, edad: number, pasatiempo: IPasatiempo){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = null
        this.estado = "Activo"
        this.nacimiento = new Date()
        this.pasatiempo = pasatiempo
        this.pertencias = []
    }
    
    saludar(): void {
        console.log("Hola")
    }
    presentarse(nombre: string): void {
        console.log(`Hola ${nombre}, mi nombre es: ${this.nombre} ${this.apellido}`)
    }
    retornarEdad(): number {
        return this.edad
    }

}