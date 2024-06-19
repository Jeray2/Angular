import { Routes } from '@angular/router';
import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'Peliculas', component: ListadoComponent },
    { path: 'Peliculas/Agregar', component: FormularioAgregarComponent },
    { path: 'Peliculas/Editar/:id', component: FormularioEditarComponent}
];
