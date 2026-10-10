import { TestBed } from '@angular/core/testing';
import type { Environment } from '../models/environment.model';
import { ENVIRONMENT, provideEnvironmentConfig } from './environment.provider';

describe(provideEnvironmentConfig.name, () => {
  it('should provide the given environment through ENVIRONMENT', () => {
    const environment: Environment = { name: 'development', production: false };
    TestBed.configureTestingModule({
      providers: [provideEnvironmentConfig(environment)],
    });

    expect(TestBed.inject(ENVIRONMENT)).toBe(environment);
  });
});
