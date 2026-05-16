import { IPasatiempo } from "./IPasatiempo"
import { IPertenencia } from "./IPertenencia"

export interface IPersona{
    id: number
    nombre: string
    apellido: string
    edad: number
    direccion: string | null
    estado: "Activo" | "Inactivo"
    observacion?: string
    pasatiempo: IPasatiempo
    pertencias: IPertenencia[]
    nacimiento: Date
    saludar(): void
    presentarse(nombre: string): void
    retornarEdad(): number
}
