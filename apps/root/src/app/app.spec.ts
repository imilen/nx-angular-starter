import { render } from '@testing-library/angular';
import { App } from './app';

describe('App', () => {
  it('should render the main landmark', async () => {
    const { getByRole } = await render(App, { routes: [] });

    expect(getByRole('main')).toBeTruthy();
  });

  it('should render the router outlet inside the main landmark', async () => {
    const { getByRole } = await render(App, { routes: [] });

    expect(getByRole('main').querySelector('router-outlet')).not.toBeNull();
  });
});
