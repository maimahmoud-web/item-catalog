import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dropDown } from './dropDown';
import { ShowListType } from './showListType';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,dropDown, ShowListType],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('item-catalog-ui');
}
