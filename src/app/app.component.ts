import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { Book } from '../types/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    BookCardComponent,
    BookFilterPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  bookFilter = '';

  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

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
