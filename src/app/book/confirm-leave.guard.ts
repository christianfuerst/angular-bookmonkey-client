import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const confirmLeaveGuard: CanDeactivateFn<BookDetailComponent> = (
  component: BookDetailComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return window.confirm('Do you really want to leave?');
};
