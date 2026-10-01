import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/app.page';
import { HomePage } from '../pages/home.page';
import { NotFoundPage } from '../pages/not-found.page';

type PageFixtures = {
  appPage: AppPage;
  homePage: HomePage;
  notFoundPage: NotFoundPage;
};

const test = base.extend<PageFixtures>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  notFoundPage: async ({ page }, use) => {
    await use(new NotFoundPage(page));
  },
});

export { expect, test };
