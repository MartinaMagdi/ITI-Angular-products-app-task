import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsList from '../../assets/productsData/products.json';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  products!: Array<Product>;
  selectedProduct!: any;
  ratingValue: number = 4.69;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const selectedProductID = this.activeRoute.snapshot.params['id'];
    this.products = productsList;
    this.selectedProduct = this.products.find(
      (product) => product.id == selectedProductID
    );
    console.log(this.selectedProduct);
  }
}
