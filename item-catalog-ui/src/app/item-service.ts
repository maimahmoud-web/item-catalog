import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Product, Service } from './item-models';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private base ='http://localhost:8080/api';

  constructor (private http:HttpClient){}

  getItem():Observable<Item[]>{
    return this.http.get<Item[]>( `${this.base}/items`)  };
    



addProduct(p:Product ):Observable<Item>{
  return this.http.post<Item>(`${this.base}/products`,p);
}

addService(s:Service ):Observable<Item>{
  return this.http.post<Item>(`${this.base}/services`,s);
}

}