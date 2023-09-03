import { Component } from '@angular/core';
import productsList from '../../assets/productsData/products.json';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products!: Array<Product>;

  ngOnInit() {
    this.products = productsList;
  }
}
