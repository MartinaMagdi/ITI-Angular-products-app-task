import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckInStockPipe } from './pipes/check-in-stock.pipe';
import { ShortTextPipe } from './pipes/short-text.pipe';

import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CheckInStockPipe,
    ShortTextPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, RatingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
