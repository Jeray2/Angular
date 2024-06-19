import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PeliculasServiceInterface } from './services/peliculas.service.interface';
import { PeliculasService } from './services/peliculas.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      { provide : PeliculasServiceInterface, useClass: PeliculasService }
  ]

};
