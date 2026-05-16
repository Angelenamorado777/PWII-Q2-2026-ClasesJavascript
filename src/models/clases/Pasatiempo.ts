import { IPasatiempo } from "../interfaces/IPasatiempo";

export class Pasatiempo implements IPasatiempo{
    id: number;
    descripcion: string;
    categoria: string;

    constructor(id: number, descripcion: string, categoria: string){
        this.id = id
        this.descripcion = descripcion
        this.categoria = categoria
    }

}