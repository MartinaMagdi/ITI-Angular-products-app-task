import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartCounter!: number;
  searchText: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => {
      this.cartCounter = 0;
      cart.forEach((item) => {
        this.cartCounter += item['quantity'];
      });
    });
  }

  search() {
    this.router.navigate(['search', this.searchText]);
  }
}
