import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

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

  setAmount(newValue: string): void {
    this.product.amount = parseInt(newValue);
  }

  addToCart(): void {
    console.log(this.cartService.addToCart({ ...this.product }))
  }

}
