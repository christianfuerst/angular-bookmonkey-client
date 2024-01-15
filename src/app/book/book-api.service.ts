import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Book } from './types/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }
}
