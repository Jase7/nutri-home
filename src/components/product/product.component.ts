import { Input } from '@angular/core';
import { Component } from '@angular/core';
import Product from '@models/Product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({ required: true}) private product!: Product;
}
