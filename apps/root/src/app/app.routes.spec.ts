import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { appRoutes } from './app.routes';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

describe('appRoutes', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(appRoutes)] });
    harness = await RouterTestingHarness.create();
  });

  it('should render Home at the root URL', async () => {
    const component = await harness.navigateByUrl('/');

    expect(component).toBeInstanceOf(Home);
    expect(document.title).toBe('Home');
  });

  it('should render NotFound for an unknown URL', async () => {
    const component = await harness.navigateByUrl('/does/not/exist');

    expect(component).toBeInstanceOf(NotFound);
    expect(document.title).toBe('Not Found');
  });
});
