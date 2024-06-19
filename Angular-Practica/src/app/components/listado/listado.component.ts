import { Component, OnInit } from '@angular/core';
import { PeliculasModel } from '../../models/peliculas.models';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faCross, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculasServiceInterface } from '../../services/peliculas.service.interface';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  faPlus = faPlus;
  peliculas: PeliculasModel[] = [];
  peliculaSeleccionada: PeliculasModel | null = null;

  constructor(private router: Router, private peliculasService: PeliculasServiceInterface) {
  }

  editarPelicula(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  ngOnInit(){
    this.peliculasService.getPeliculas().subscribe({
      next : (lista :PeliculasModel[]) => {
        this.peliculas = lista;
      }
    });
  }
}
