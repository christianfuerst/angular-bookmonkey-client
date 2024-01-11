import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Book } from '../../types/book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() content: Book = {
    title: '',
    author: '',
    abstract: '',
  };

  customStyle = {
    color: 'purple',
  };
}
