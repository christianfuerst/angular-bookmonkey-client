import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Book } from '../../types/book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() content: Book = {
    title: '',
    author: '',
    abstract: '',
  };

  @Output() detailClick = new EventEmitter<Book>();

  handleDetailClick = (): void => {
    this.detailClick.emit(this.content);
  };

  customStyle = {
    color: 'purple',
  };
}
