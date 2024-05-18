import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {  RouterModule,Routes, } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
const routes: Routes =[
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart", component: CartComponent},
  {path: "products", component: ProductListComponent},
  {path: "product-detail/:slug", component: ProductDetailComponent},
  {path: "check-out", component: CheckOutComponent},
  {path: "", redirectTo: "/home", pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
HomeComponent,
LoginComponent,
CartComponent,
CategoriesListComponent,
ProductListComponent,
RegisterComponent,
ProductDetailComponent,
CheckOutComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
