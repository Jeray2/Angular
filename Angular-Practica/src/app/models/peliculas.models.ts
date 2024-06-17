import { Generos } from "./enum/genero.model";

export interface PeliculasModel {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: Generos;
    imagen: string;
    fechaEstreno: Date;
    duracion: number;
    precio: number;
    rating: number;
}