import { TestBed } from '@angular/core/testing';
import { NotFound } from './not-found';

describe('NotFound', () => {
  it('should render the not-found content', async () => {
    const fixture = TestBed.createComponent(NotFound);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('p')?.textContent).toContain('not-found works!');
  });
});
