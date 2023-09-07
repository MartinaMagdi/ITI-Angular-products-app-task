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
  totalPrice!: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((val) => {
      this.cart = val;
    });

    this.calculateTotalPrice();
  }

  increaseQuantity(product: any) {
    this.newCart = this.cart.map((item) => {
      if (product.id === item.id) {
        ++item.quantity;
      }
      return item;
    });

    this.setNewCartUsingService();
    this.calculateTotalPrice();
  }

  decreaseQuantity(product: any) {
    this.newCart = this.cart.map((item) => {
      if (product.id === item.id) {
        --item.quantity;
      }
      return item;
    });

    this.setNewCartUsingService();
    this.calculateTotalPrice();
  }

  deleteProductFromCart(product: any) {
    this.newCart = this.cart.filter((item) => item.id !== product.id);
    this.setNewCartUsingService();
    this.calculateTotalPrice();
  }

  setNewCartUsingService() {
    this.cartService.setCart(this.newCart);
  }

  calculateTotalPrice() {
    this.totalPrice = 0;

    if (this.cart.length > 0) {
      this.cart.forEach((item) => {
        this.totalPrice += item.price * item.quantity;
      });
    }
  }
}
