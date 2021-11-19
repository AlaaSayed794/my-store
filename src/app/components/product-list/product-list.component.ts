import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  title: string = 'Products list';

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe(_res => {
      this.products = this.productsService.getProducts();
    })
  }
}
