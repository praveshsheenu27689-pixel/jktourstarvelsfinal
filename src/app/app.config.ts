import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { withHashLocation } from '@angular/router';
=======
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
    provideHttpClient()
=======
    provideRouter(routes),
    provideAnimations()
>>>>>>> 18aafcba21d516c54cdc1d453584d2eb2657d085
  ]
};
