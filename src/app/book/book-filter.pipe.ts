import { Pipe, PipeTransform } from '@angular/core';

import { Book } from './types/book';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[] | null, searchTerm: string): Book[] {
    if (!books) {
      return [];
    }

    if (!searchTerm) {
      return books;
    }

    // Ignore case
    searchTerm = searchTerm.toLocaleLowerCase();

    return books.filter((b) =>
      b.title.toLocaleLowerCase().includes(searchTerm)
    );
  }
}
