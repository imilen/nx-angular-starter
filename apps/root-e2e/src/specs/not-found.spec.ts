import { expect, test } from '../support/fixtures';

test.describe('NotFound page', () => {
  test.beforeEach(async ({ notFoundPage }) => {
    await notFoundPage.goto();
  });

  test('has the correct URL', async ({ page }) => {
    await expect(page).toHaveURL(/\/this-route-does-not-exist$/);
  });

  test('renders the page content', async ({ notFoundPage }) => {
    await expect(notFoundPage.root).toBeVisible();
    await expect(notFoundPage.root).toContainText('not-found works!');
  });

  test('has the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Not Found');
  });
});
