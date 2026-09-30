import type { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected constructor(
    protected readonly page: Page,
    protected readonly path: string,
  ) { }

  async goto(): Promise<void> {
    await this.page.goto(this.path);
  }

  async title(): Promise<string> {
    return this.page.title();
  }

  protected byTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }
}
