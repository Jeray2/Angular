import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : String = "Hola Mundo desde el componente HolaMundoComponent";
  color : String = "blue";
  alumnos : String[] = ["Juan", "Pedro", "Maria", "Jose", "Javier"];
}
