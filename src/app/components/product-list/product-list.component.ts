import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
      console.log(res)
    });
  }

}
