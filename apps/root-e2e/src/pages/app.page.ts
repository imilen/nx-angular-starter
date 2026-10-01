import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AppPage extends BasePage {
  readonly root: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('app-root');
  }

  async goto() {
    await this.navigate('/');
  }
}
