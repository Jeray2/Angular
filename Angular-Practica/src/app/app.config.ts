import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PeliculasServiceInterface } from './services/peliculas.service.interface';
import { provideHttpClient } from '@angular/common/http';
import { PeliculasServiceHttp } from './services/peliculas.service.http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),
      { provide : PeliculasServiceInterface, useClass: PeliculasServiceHttp }
  ]

};
