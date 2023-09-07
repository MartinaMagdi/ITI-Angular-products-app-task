import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent {
  @Input() product!: Product;
  @Input() buttonFullWidth!: boolean;

  cart!: Array<any>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cartData) => (this.cart = cartData));
  }

  addToCart(product: Product) {
    let newCart: any = [];
    const newProduct = Object.assign({}, product, { quantity: 1 });

    if (this.cart.length < 1) {
      newCart.push(newProduct);
    } else {
      const isExist = this.cart.some((item) => product.id === item.id);

      if (isExist) {
        newCart = this.cart.map((item) => {
          if (product.id === item.id) {
            ++item.quantity;
            return item;
          }
          return item;
        });
      } else {
        newCart = [...this.cart, newProduct];
      }
    }
    this.cartService.setCart(newCart);
  }
}
