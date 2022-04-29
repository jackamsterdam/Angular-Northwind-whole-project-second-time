import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { LogoComponent } from './components/layout-area/logo/logo.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { BestProductComponent } from './components/home-area/best-product/best-product.component';
import { OrderComponent } from './components/home-area/order/order.component';

import {FormsModule} from '@angular/forms';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { SpecialsComponent } from './components/home-area/specials/specials.component';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { ColorBoxComponent } from './components/home-area/color-box/color-box.component'

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    LogoComponent,
    DiscountComponent,
    SaleComponent,
    BestProductComponent,
    OrderComponent,
    SloganComponent,
    SpecialsComponent,
    DessertsComponent,
    TipComponent,
    ColorBoxComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        // if we want to do 2 way binding with inputs we need a command pkuda that is in a differetn module so we need to import it !! 

    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
