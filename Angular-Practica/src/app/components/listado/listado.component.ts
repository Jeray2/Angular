import { Component, OnInit } from '@angular/core';
import { PeliculasModel } from '../../models/peliculas.models';
import { PELICULAS } from '../../models/test/mock-contactos';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  peliculas: PeliculasModel[] = PELICULAS;
  peliculaSeleccionada: PeliculasModel | null = null;

  constructor(private router: Router) {}

  editarPelicula(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  ngOnInit(): void {}
}
