import { Routes } from '@angular/router';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';
import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'agregar', component: FormularioAgregarComponent },
    { path: 'editar/:id', component: FormularioEditarComponent}
];
