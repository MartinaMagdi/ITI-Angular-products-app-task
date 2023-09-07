import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject([]);
  constructor() {}

  getCart() {
    return this.cart.asObservable();
  }

  setCart(newCart: any) {
    this.cart.next(newCart);
  }
}
