import { Component, OnInit } from '@angular/core';
import { PeliculasModel } from '../../models/peliculas.models';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDeleteLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PeliculasServiceInterface } from '../../services/peliculas.service.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  faPlus = faPlus;
  faDelete = faDeleteLeft;
  peliculas: PeliculasModel[] = [];
  peliculaSeleccionada: PeliculasModel | null = null;

  constructor(private router: Router, private peliculasService: PeliculasServiceInterface ) {
  }

  editarPelicula(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number): void{
    swal.fire(
      '¿Estás seguro?',
      'Esta acción no puede revertirse',
      'warning'
    ).then(respuesta => {
      if(respuesta.value){
        this.peliculasService.eliminar(id).subscribe({
          next : () => {
            this.peliculas = this.peliculas.filter(pelicula => pelicula.id!== id);
          }
        });
      }
    });    
  }

  ngOnInit(){
    this.peliculasService.getPeliculas().subscribe({
      next : (lista :PeliculasModel[]) => {
        this.peliculas = lista;
      }
    });
  }
}
