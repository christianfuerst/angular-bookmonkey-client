import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, BookComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
