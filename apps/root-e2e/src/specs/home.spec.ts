import { expect, test } from '../support/fixtures';

test.describe('Home page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('has the correct URL', async ({ page }) => {
    await expect(page).toHaveURL(/\/home$/);
  });

  test('renders the page content', async ({ homePage }) => {
    await expect(homePage.root).toBeVisible();
    await expect(homePage.root).toContainText('home works!');
  });

  test('has the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Home');
  });
});
