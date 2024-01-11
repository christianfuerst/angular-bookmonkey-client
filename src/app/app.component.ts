import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello World!';

  book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };
}
