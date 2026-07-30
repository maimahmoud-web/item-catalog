
import { Component, OnInit } from '@angular/core';
import { ItemService } from './item-service';
import { Item } from './item-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'showListType',
  templateUrl: './showListType.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './showListType.css'
})
export class showListType implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItem().subscribe({
      next: data => {
        this.items = data;
      },

      error: error => {
        console.error('Could not load items:', error);
      }
    });
  }
}