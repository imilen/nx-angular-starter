import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class NotFoundPage extends BasePage {
  readonly root: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('app-not-found');
  }

  async goto(path = '/this-route-does-not-exist') {
    await this.navigate(path);
  }
}
