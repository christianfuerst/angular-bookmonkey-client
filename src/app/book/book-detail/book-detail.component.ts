import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  isbn: string = '';
  content: Book | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.bookService.getBookByIsbn(params['isbn']).subscribe((book) => {
          this.content = book;
        });
      },
    });
  }
}
