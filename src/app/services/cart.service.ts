import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]

  constructor() {
    this.cart = [];
  }

  addToCart(newProduct: Product): Product[] {
    const product: Product = this.cart.find((p: Product) => p.id === newProduct.id) as Product
    if (product) {
      this.cart = this.cart.map((p: Product) => {
        if (p.id == newProduct.id) {
          p.amount = p.amount + newProduct.amount
        }
        return p
      })
    }
    else {
      this.cart.push(newProduct);
    }
    return this.cart;
  }

  removeFromCart(product: Product): Product[] {
    this.cart = this.cart.filter(p => p.id === product.id)
    return this.cart
  }

  resetCart(): Product[] {
    this.cart = []
    return this.cart
  }


}
