import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[];
  username: string = '';
  address: string = '';
  cardNumber: string = '';

  constructor(private cartService: CartService) {
    this.cart = [];
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product)
    this.cart = this.cartService.getCart();
  }

  getTotalPrice(): number {
    const price = this.cart.reduce((accumalator, p) => {
      accumalator += p.price * p.amount;
      return accumalator;
    }, 0)
    return price;
  }

  submitForm(): void {

    this.username = '';
    this.address = '';
    this.cardNumber = '';
  }
}
