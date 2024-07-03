import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : string = "Hola Mundo desde el componente HolaMundoComponent";
  color : string = "blue";
  alumnos : string[] = ["Juan", "Pedro", "Maria", "Jose", "Javier"];

  mostrarDiv : boolean = false;

  alternarDivs() {
    this.mostrarDiv =!this.mostrarDiv;
  }

  AgregarAlumno(alumno : HTMLInputElement) {
    this.alumnos.push(alumno.value);
    alumno.value = "";
  }

}
