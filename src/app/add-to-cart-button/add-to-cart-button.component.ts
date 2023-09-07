import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent {
  @Input() product!: Product;
  @Input() buttonFullWidth!: boolean;

  addToCart(id: number | string) {
    console.log(id);
  }
}
