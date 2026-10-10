import {
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  type ApplicationConfig,
} from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { environment } from '../environments';
import { appRoutes } from './app.routes';
import { provideEnvironmentConfig } from './core/providers/environment.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withPreloading(NoPreloading),
    ),
    provideEnvironmentConfig(environment),
  ],
};
