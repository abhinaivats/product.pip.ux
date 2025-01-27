import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  prodcut: Product = {
    name: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private productService: ProductService) {}

  saveProduct(): void {
    const data = {
      title: this.prodcut.name,
      description: this.prodcut.description
    };

    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.prodcut = {
      name: '',
      description: '',
      published: false
    };
  }
}
