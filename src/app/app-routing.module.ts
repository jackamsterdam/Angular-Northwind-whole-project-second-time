import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';

const routes: Routes = [

 {path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent},
 {path: 'logout', component: LogoutComponent},

  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/details/:id', component: ProductDetailsComponent},
  {path: 'products/edit/:id', component: UpdateProductComponent},
  {path:'products/new', component: AddProductComponent},
  {path: 'about', component: AboutComponent},

  // Default route:
  // {path: '', component: HomeComponent}
  // better: 
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  //Page not found:
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
