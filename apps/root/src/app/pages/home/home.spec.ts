import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  it('should render the home content', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('p')?.textContent).toContain('home works!');
  });
});
