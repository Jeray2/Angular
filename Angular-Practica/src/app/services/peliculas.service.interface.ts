import { Observable } from "rxjs";
import { PeliculasModel } from "../models/peliculas.models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export abstract class PeliculasServiceInterface {

  abstract getPeliculas(): Observable<PeliculasModel[]>;

  abstract agregarPelicula(pelicula: PeliculasModel): Observable<PeliculasModel>;

  abstract editarPelicula(pelicula: PeliculasModel): Observable<any>;

  abstract eliminar(id: number): Observable<any>;
}
