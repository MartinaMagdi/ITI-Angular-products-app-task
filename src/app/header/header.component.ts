import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartCounter!: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => {
      this.cartCounter = 0;
      cart.forEach((item) => {
        this.cartCounter += item['quantity'];
      });
    });
  }
}
