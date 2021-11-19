import { Injectable } from '@angular/core';
import { Product } from './types/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get("./assets/data.json") as Observable<Product[]>;
  }
}
