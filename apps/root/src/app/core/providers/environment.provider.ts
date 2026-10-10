import {
  InjectionToken,
  makeEnvironmentProviders,
  type EnvironmentProviders,
} from '@angular/core';
import type { Environment } from '../models/environment.model';

export const ENVIRONMENT = new InjectionToken<Environment>('ENVIRONMENT');

export function provideEnvironmentConfig(
  environment: Environment,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: ENVIRONMENT, useValue: environment },
  ]);
}
