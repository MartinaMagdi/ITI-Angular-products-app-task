import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchedProductsComponent } from './show-searched-products.component';

describe('ShowSearchedProductsComponent', () => {
  let component: ShowSearchedProductsComponent;
  let fixture: ComponentFixture<ShowSearchedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSearchedProductsComponent]
    });
    fixture = TestBed.createComponent(ShowSearchedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
