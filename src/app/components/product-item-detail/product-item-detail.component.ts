// reference link https://stackoverflow.com/questions/58595593/7-8-dynamic-routes
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {
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
    this.route.params.subscribe((params: Params) => {
      this.product = this.productsService.getProducts().find(p => p.id == params['id']) as Product;
    });
  }

  setAmount(newValue: string): void {
    this.product.amount = parseInt(newValue);
  }

  addToCart(): void {
    console.log(this.cartService.addToCart({ ...this.product }))
  }

}
