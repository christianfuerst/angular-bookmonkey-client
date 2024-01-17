import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.routes').then((module) => module.bookRoutes),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
