import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProdcuts(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.findByTitle(this.name).subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
