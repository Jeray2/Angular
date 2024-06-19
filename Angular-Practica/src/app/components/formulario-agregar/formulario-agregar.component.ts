import { Component } from '@angular/core';
import { PeliculasModel } from '../../models/peliculas.models';
import { Generos } from '../../models/enum/genero.model';
import { Router } from '@angular/router';
import { PELICULAS } from '../../models/test/mock-contactos';
import { FormBuilder, FormGroup,  FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-agregar',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './formulario-agregar.component.html',
  styleUrl: './formulario-agregar.component.css'
})
export class FormularioAgregarComponent {
  form : FormGroup = new FormGroup({});
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      fechaEstreno: ['', Validators.required],
      categoria: ['', Validators.required],
      imagen: [''], // Campo opcional
      duracion: [0, [Validators.required, Validators.min(0)]],
      precio: [0, [Validators.required, Validators.min(0)]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }


  nuevaPelicula: PeliculasModel = {
    id: 0, // ID se asignará automáticamente
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

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const nuevaPelicula: PeliculasModel = {
        ...this.form.value,
        id: this.generarNuevoId(),
        fechaEstreno: new Date(this.form.value.fechaEstreno)
      };

      PELICULAS.push(nuevaPelicula);
      console.log('Película agregada:', nuevaPelicula);
      this.router.navigate(['/Peliculas']);
    }
  }

  generarNuevoId(): number {
    const ids = PELICULAS.map(pelicula => pelicula.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
