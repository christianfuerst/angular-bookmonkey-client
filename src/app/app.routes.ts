import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  { path: 'books/detail/:isbn', component: BookDetailComponent },
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
