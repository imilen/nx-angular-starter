import { render, screen } from '@testing-library/angular';
import { NotFound } from './not-found';

describe('NotFound', () => {
  it('should render the not-found content', async () => {
    await render(NotFound);

    expect(screen.getByText('not-found works!')).toBeTruthy();
  });
});
