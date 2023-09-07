import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCounterService {
  private cartCounter = new BehaviorSubject(0);
  constructor() {}

  getCartCounterVal() {
    return this.cartCounter.asObservable();
  }

  setCartCounterVal(newVal: number) {
    this.cartCounter.next(newVal);
  }
}
