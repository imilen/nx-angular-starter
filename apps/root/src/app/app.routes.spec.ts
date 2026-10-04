import { render } from '@testing-library/angular';
import { App } from './app';
import { appRoutes } from './app.routes';

describe('appRoutes', () => {
  const setup = () => render(App, { routes: appRoutes });

  it('should redirect the root URL to Home', async () => {
    const { navigate, findByText } = await setup();

    await navigate('/');

    expect(await findByText('home works!')).toBeTruthy();
    expect(document.title).toBe('Home');
  });

  it('should render Home at /home', async () => {
    const { navigate, findByText } = await setup();

    await navigate('/home');

    expect(await findByText('home works!')).toBeTruthy();
    expect(document.title).toBe('Home');
  });

  it('should render NotFound for an unknown URL', async () => {
    const { navigate, findByText } = await setup();

    await navigate('/does/not/exist');

    expect(await findByText('not-found works!')).toBeTruthy();
    expect(document.title).toBe('Not Found');
  });
});
