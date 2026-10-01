import type { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
    title: 'Not Found',
  },
];
