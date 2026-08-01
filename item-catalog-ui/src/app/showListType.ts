
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Item } from './item-models';
import { loadItem } from './item.actions';
import { ItemState } from './item.state';

import { deleteItem } from './item.actions';

@Component({
  selector: 'showListType',
  templateUrl: './showListType.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './showListType.css'
})
export class ShowListType implements OnInit {

  items$: Observable<Item[]>;

  constructor(
    private store: Store<{ items: ItemState }>
  ) {
    this.items$ = this.store.select(
      state => state.items.items
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadItem());
  }

  removeItem(id: number): void {
  this.store.dispatch(
    deleteItem({ id })
  );
}
}