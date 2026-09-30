import { expect, test } from '@playwright/test';
import { AppPage } from '../pages/app.page';

test.describe('app shell', () => {
  let appPage: AppPage;

  test.beforeEach(async ({ page }) => {
    appPage = new AppPage(page);
    await appPage.goto();
  });

  test('bootstraps the root component', async () => {
    await expect(appPage.root).toBeAttached();
  });

  test('mounts the router outlet', async () => {
    await expect(appPage.routerOutlet).toBeAttached();
  });

  test('has the expected document title', async () => {
    expect(await appPage.title()).toBe('root');
  });
});
