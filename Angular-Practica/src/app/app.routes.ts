import { Routes } from '@angular/router';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';

export const routes: Routes = [
    { path: '', component: HolaMundoComponent },
    { path: 'formulario', component: FormularioEjemploComponent }
];
