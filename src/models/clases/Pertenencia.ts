import { IPertenencia } from "../interfaces/IPertenencia";

export class Pertenencia implements IPertenencia{
    id: number;
    descripcion: string;

    constructor(id: number, descripcion: string){
        this.id = id
        this.descripcion = descripcion
    }

}