import { Injectable } from '@angular/core';

import { Book } from './types/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private books: Book[] = [
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      abstract:
        'The story of Holden Caulfield, a young man who wanders through New York City in the aftermath of his expulsion from an elite prep school.',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      abstract:
        'Set in the American South during the 1930s, this novel explores themes of racial injustice and moral growth through the eyes of Scout Finch, a young girl.',
    },
    {
      title: '1984',
      author: 'George Orwell',
      abstract:
        'A dystopian novel depicting a totalitarian society under the control of a ruling party led by Big Brother, exploring themes of surveillance, propaganda, and resistance.',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      abstract:
        'Set in the Roaring Twenties, this novel explores the American Dream through the life of Jay Gatsby and his obsession with the beautiful Daisy Buchanan.',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      abstract:
        'The adventure of Bilbo Baggins, a hobbit who is reluctantly drawn into a quest to reclaim a treasure guarded by the fearsome dragon Smaug.',
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      abstract:
        'The first book in the Harry Potter series, following the journey of a young wizard, Harry Potter, as he discovers his magical abilities and faces the dark wizard Voldemort.',
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      abstract:
        'A high-fantasy epic following the quest to destroy the One Ring, bringing together various races and characters in a battle against the dark forces of Sauron.',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      abstract:
        'A classic novel exploring the themes of love, class, and societal expectations as Elizabeth Bennet navigates the challenges of finding a suitable husband in 19th-century England.',
    },
    {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      abstract:
        'A mystery thriller that follows symbologist Robert Langdon as he investigates a murder at the Louvre Museum, uncovering hidden secrets and conspiracies.',
    },
    {
      title: 'The Road',
      author: 'Cormac McCarthy',
      abstract:
        "A post-apocalyptic novel following a father and son's journey through a desolate landscape, exploring themes of survival, morality, and the human condition.",
    },
  ];

  getAll() {
    return this.books;
  }
}