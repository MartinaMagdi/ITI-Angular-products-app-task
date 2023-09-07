import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Array<any>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((val) => {
      this.cart = val;
    });
  }
}
