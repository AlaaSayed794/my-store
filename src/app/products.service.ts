import { Injectable } from '@angular/core';
import { Product } from './types/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  constructor(private http: HttpClient) {
    this.products = [];
    this.fetchProducts().subscribe(res => {
      this.products = res.map(p => {
        p.amount = 1;
        return p as Product;
      });
    });
  }
  fetchProducts(): Observable<Product[]> {
    return this.http.get("./assets/data.json") as Observable<Product[]>;
  }
  getProducts(): Product[] {
    return this.products
  }
}
