import { expect, test } from '../support/fixtures';

test.describe('App', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.goto();
  });

  test('renders the app shell', async ({ appPage }) => {
    await expect(appPage.root).toBeVisible();
  });

  test('redirects / to /home', async ({ page, homePage }) => {
    await expect(page).toHaveURL(/\/home$/);
    await expect(homePage.root).toBeVisible();
  });
});
