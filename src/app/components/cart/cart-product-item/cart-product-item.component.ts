import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() removeFromCart: EventEmitter<Product> = new EventEmitter;


  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1
    }
  }

  ngOnInit(): void {
  }

  remove(product: Product): Product {
    this.removeFromCart.emit(product)
    return product
  }

}
