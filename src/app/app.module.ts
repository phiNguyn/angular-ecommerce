import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ui
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
//
// Guards
import { GuardsService } from './auth/guards';
// 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { CartItemComponent } from './components/cart/cartItem/cartItem.component';
import { SummaryComponent } from './components/cart/Summary/Summary.component';
import { AddressComponent } from './components/check-out/address/address.component';
import { InfoComponent } from './components/check-out/info/info.component';
import { ItemComponent } from './components/check-out/item/item.component';
import { OrderDetailComponent } from './components/userProfile/orderDetail/orderDetail.component';
// 
// 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'check-out', component: CheckOutComponent },

  { path: 'me', component: UserProfileComponent, canActivate: [GuardsService],
   children: [{
    path: "order/:id", component: OrderDetailComponent
  }] 
},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CategoriesListComponent,
    RegisterComponent,
    ProductDetailComponent,
    CheckOutComponent,
    ProductListComponent,
    CartItemComponent,
    SummaryComponent,
    AddressComponent,
    InfoComponent,
    ItemComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RippleModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
