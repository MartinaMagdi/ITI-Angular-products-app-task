import { Component } from '@angular/core';
// import productsList from '../../assets/productsData/products.json';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products!: Array<Product>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // to set products array from productsList json file
    // this.products = productsList;

    // to set products array from api
    this.productsService.getProductsList().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => console.log(err),
      complete: () => console.log('products returned successfully'),
    });
  }
}
