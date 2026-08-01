import { ItemService } from "./item-service";
import { createAction,props } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Item, Product, Service } from './item-models';

@Component({
    selector:'dropDown',
    templateUrl:'./dropDown.html',
    standalone: true,
     imports: [CommonModule, ReactiveFormsModule],
    styleUrl:'./dropDown.css'
})
export class dropDown{

    itemForm = new FormGroup({
    type: new FormControl('', Validators.required),
    code_number: new FormControl<string | null>(null, Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    weightKg: new FormControl<number | null>(null),
    durationHours: new FormControl<number | null>(null)
  });

    constructor(private itemService: ItemService) {}

    @Output() itemAdded = new EventEmitter<void>();

onSubmit(): void {

     console.log('Submit clicked');
  console.log('Form value:', this.itemForm.getRawValue());
  console.log('Form valid:', this.itemForm.valid);
    if (this.itemForm.invalid) {
      return;
    }
    const formValue = this.itemForm.getRawValue();

    if (formValue.type==='product'){
        const prod: Product = {
            code_number:formValue.code_number!,
            name:formValue.name!,
            price:formValue.price!,
            type:'product',
            weightKg:formValue.weightKg!
        };
        
        this.itemService.addProduct(prod).subscribe({
  next: savedProduct => {
    console.log('Product saved:', savedProduct);
    this.itemForm.reset();
    this.itemAdded.emit();
  },

  error: error => {
    console.error('Could not save product:', error);
  }
});
        
    }

    if (formValue.type==='service'){
        const ser: Service = {
          
            code_number:formValue.code_number!,
            name:formValue.name!,
            price:formValue.price!,
            type:'service',
            durationHours:formValue.durationHours!
        };
        
        this.itemService.addService(ser).subscribe({
  next: savedService => {
    console.log('Service saved:', savedService);
    this.itemForm.reset();
    this.itemAdded.emit();
  },

  error: error => {
    console.error('Could not save Service:', error);
  }
});
        
    }
}}