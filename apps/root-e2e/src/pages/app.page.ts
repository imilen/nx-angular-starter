import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AppPage extends BasePage {
  constructor(page: Page) {
    super(page, '/');
  }

  get root(): Locator {
    return this.page.locator('app-root');
  }

  get routerOutlet(): Locator {
    return this.page.locator('router-outlet');
  }
}
