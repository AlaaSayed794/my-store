import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/types/order';
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

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {
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
    const order: Order = {
      username: this.username,
      address: this.address,
      price: this.getTotalPrice(),
      products: this.cart
    }
    this.orderService.setOrder(order)
    this.cartService.resetCart()
    this.username = '';
    this.address = '';
    this.cardNumber = '';
    this.router.navigate(['/confirmation']);
  }
}
