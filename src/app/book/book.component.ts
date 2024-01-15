import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { BookCardComponent } from './book-card/book-card.component';
import { BookApiService } from './book-api.service';
import { BookFilterPipe } from './book-filter.pipe';
import { Book } from './types/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BookCardComponent,
    BookFilterPipe,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnDestroy {
  cols: number | undefined;

  gridByBreakpoint = {
    xl: 4,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1,
  };

  bookFilter = '';

  books: Book[] = [];

  subscription: Subscription = new Subscription();

  constructor(
    private readonly bookApi: BookApiService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });

    this.subscription.add(
      this.bookApi.getAll().subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (err) => {
          console.error(err);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filterbooks(book: Book): Book[] {
    return this.books.filter((b) => b.title.includes(book.title));
  }

  updateBookFilter(input: Event) {
    this.bookFilter = (input.target as HTMLInputElement).value;
  }

  navigate(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
