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
  title: string = 'Products list';

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res.map(p => {
        p.amount = 1;
        return p as Product;
      });
    });
  }

}
