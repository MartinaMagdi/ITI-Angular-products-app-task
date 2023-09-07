import { Component } from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartCounter!: number;

  constructor(private CartCounterService: CartCounterService) {}

  ngOnInit() {
    this.CartCounterService.getCartCounterVal().subscribe(
      (val) => (this.cartCounter = val)
    );
  }
}
