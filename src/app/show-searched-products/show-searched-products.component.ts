import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-searched-products',
  templateUrl: './show-searched-products.component.html',
  styleUrls: ['./show-searched-products.component.css'],
})
export class ShowSearchedProductsComponent {
  products: Array<Product> = [];
  searchKeyword!: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((param: any) => {
      this.searchKeyword = param.params['keyword'];
      this.productsService.getSearchedProducts(this.searchKeyword).subscribe({
        next: (res) => {
          this.products = res.products;
        },
        error: (err) => console.log(err),
      });
    });
  }
}
