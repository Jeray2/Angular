import { Injectable } from "@angular/core";
import { PeliculasServiceInterface } from "./peliculas.service.interface";
import { Observable } from "rxjs";
import { PeliculasModel } from "../models/peliculas.models";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PeliculasServiceHttp extends PeliculasServiceInterface {

    private url: string = 'http://localhost:3000/peliculas';

    override getPeliculas(): Observable<PeliculasModel[]> {
        return this.http.get<PeliculasModel[]>(this.url);
    }
    override getPelicula(id: number): Observable<PeliculasModel> {
        return this.http.get<PeliculasModel>(this.url + '/' + id);
    }
    override agregarPelicula(pelicula: PeliculasModel): Observable<PeliculasModel> {
        return this.http.post<PeliculasModel>(this.url, pelicula);
    }
    override editarPelicula(pelicula: PeliculasModel): Observable<any> {
        return this.http.put(this.url, pelicula);
    }
    override eliminar(id: number): Observable<any> {
        return this.http.delete(this.url + '/' + id);
    }
    constructor(private http : HttpClient) {
        super();
    }






}