import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeliculasModel } from '../../models/peliculas.models';
import { Generos } from '../../models/enum/genero.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PELICULAS } from '../../models/test/mock-contactos';
import { PeliculasServiceInterface } from '../../services/peliculas.service.interface';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent implements OnInit {
  pelicula: PeliculasModel = {
    id: 0,
    nombre: '',
    descripcion: '',
    categoria: Generos.Accion,
    imagen: '',
    fechaEstreno: new Date(),
    duracion: 0,
    precio: 0,
    rating: 0
  };

  generos = Object.values(Generos);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PeliculasServiceInterface
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.cargarPelicula(id);
    } else {
      // Manejar el caso donde no se proporciona un ID válido
      console.error('ID de película no válido');
      // Redirigir o manejar el error según sea necesario
      this.router.navigate(['/peliculas']);
    }
  }

  cargarPelicula(id: number): void {
    const peliculaEncontrada = this.service.getPelicula(id);
    if (peliculaEncontrada) {
      peliculaEncontrada.subscribe(
        (pelicula: PeliculasModel) => this.pelicula = pelicula
      );
    } else {
      // Manejar el caso donde no se encuentra la película
      console.error(`No se encontró la película con ID ${id}`);
      // Redirigir o manejar el error según sea necesario
      this.router.navigate(['/peliculas']);
    }
  }

  onSubmit(): void {
    // Lógica para guardar la película (puedes modificar directamente el objeto en el array PELICULAS si es necesario)
    console.log('Pelicula guardada:', this.pelicula);
    // Redirigir a la lista de películas u otra página después de guardar
    this.router.navigate(['/Peliculas']);
  }
}
