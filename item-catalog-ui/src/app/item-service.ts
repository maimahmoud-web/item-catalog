import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Item, Product, Service } from './item-models';
import { createEffect, ofType } from '@ngrx/effects';
import { loadItem, loadItemsSuccess } from "./item.actions";

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private base ='http://localhost:8080/api';

  constructor (private http:HttpClient){}

  getItem():Observable<Item[]>{
    return this.http.get<Item[]>( `${this.base}/items`)  };


addProduct(p:Product ):Observable<Product>{
  return this.http.post<Product>(`${this.base}/products`,p);
}

addService(s:Service ):Observable<Service>{
  return this.http.post<Service>(`${this.base}/services`,s);
}

deleteItem(id: number): Observable<void> {
  return this.http.delete<void>(
    `${this.base}/items/${id}`
  );
}

}