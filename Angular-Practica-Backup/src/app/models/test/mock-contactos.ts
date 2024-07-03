import { Generos } from "../enum/genero.model";
import { PeliculasModel } from "../peliculas.models";


export const PELICULAS: PeliculasModel[] = [
  {
    id: 1,
    nombre: 'Matrix',
    descripcion: 'Un hacker descubre la verdadera naturaleza de su realidad.',
    categoria: Generos.CienciaFiccion,
    imagen: 'https://via.placeholder.com/150',
    fechaEstreno: new Date(1999, 2, 31),
    duracion: 136,
    precio: 10.99,
    rating: 4.7
  },
  {
    id: 2,
    nombre: 'Inception',
    descripcion: 'Un ladrón que roba secretos a través del uso de la tecnología de sueños compartidos.',
    categoria: Generos.CienciaFiccion,
    imagen: 'https://via.placeholder.com/150',
    fechaEstreno: new Date(2010, 6, 16),
    duracion: 148,
    precio: 12.99,
    rating: 4.8
  },
  {
    id: 3,
    nombre: 'The Dark Knight',
    descripcion: 'Batman se enfrenta al Joker, un villano anárquico empeñado en destruir Gotham.',
    categoria: Generos.Accion,
    imagen: 'https://via.placeholder.com/150',
    fechaEstreno: new Date(2008, 6, 18),
    duracion: 152,
    precio: 11.99,
    rating: 4.9
  }
];


