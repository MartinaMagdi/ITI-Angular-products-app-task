import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import productsList from '../../assets/productsData/products.json';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // products!: Array<Product>;
  selectedProduct: any = {};
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    const selectedProductID = this.activeRoute.snapshot.params['id'];

    // when get product details using json file

    // this.products = productsList;
    // this.selectedProduct = this.products.find(
    //   (product) => product.id == selectedProductID
    // );

    this.productService.getProductDetails(selectedProductID).subscribe({
      next: (product) => (this.selectedProduct = product),
      error: (error) => console.log(error),
    });
  }
}
