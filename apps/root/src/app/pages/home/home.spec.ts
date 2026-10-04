import { render, screen } from '@testing-library/angular';
import { Home } from './home';

describe('Home', () => {
  it('should render the home content', async () => {
    await render(Home);

    expect(screen.getByText('home works!')).toBeTruthy();
  });
});
