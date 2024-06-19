import { Injectable } from '@angular/core';
import { PeliculasModel } from '../models/peliculas.models';
import { PELICULAS } from '../models/test/mock-contactos';
import { Observable, of } from 'rxjs';
import { PeliculasServiceInterface } from './peliculas.service.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService implements PeliculasServiceInterface {

  constructor() { }

  getPeliculas(): Observable<PeliculasModel[]> {
    return of(PELICULAS);
  }

  agregarPelicula(pelicula: PeliculasModel): Observable<PeliculasModel> {
    pelicula.id = Math.max(...PELICULAS.map(p => p.id) , 0 ) + 1;
    PELICULAS.push(pelicula);
    return of(pelicula);
  }

  editarPelicula(pelicula: PeliculasModel): Observable<any> {
    const peliculaEncontrada = PELICULAS.find(p => p.id === pelicula.id);
    if (peliculaEncontrada) {
      const indice = PELICULAS.indexOf(peliculaEncontrada);
      PELICULAS[indice] = pelicula;
    }
    return of(null);
  }

  eliminar(id: number): Observable<any> {
    const peliculaEncontrada = PELICULAS.find(p => p.id === id);
    if (peliculaEncontrada) {
      const indice = PELICULAS.indexOf(peliculaEncontrada);
      PELICULAS.splice(indice, 1);
      return of(peliculaEncontrada);
    } else {
      return of(null);
    }
  }
}
