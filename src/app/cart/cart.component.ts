import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Array<any>;
  newCart!: Array<any>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((val) => {
      this.cart = val;
    });
  }

  increaseQuantity(product: any) {
    this.newCart = this.cart.map((item) => {
      if (product.id === item.id) {
        ++item.quantity;
      }
      return item;
    });

    this.setNewCartUsingService();
  }

  decreaseQuantity(product: any) {
    this.newCart = this.cart.map((item) => {
      if (product.id === item.id) {
        --item.quantity;
      }
      return item;
    });

    this.setNewCartUsingService();
  }

  deleteProductFromCart(product: any) {
    this.newCart = this.cart.filter((item) => item.id !== product.id);
    this.setNewCartUsingService();
  }

  setNewCartUsingService() {
    this.cartService.setCart(this.newCart);
  }
}
