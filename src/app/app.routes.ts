import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
];
