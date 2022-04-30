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
import { ColorBoxComponent } from './components/home-area/color-box/color-box.component';
import { CouponComponent } from './components/home-area/coupon/coupon.component';
import { NumToWordPipe } from './pipes/num-to-word.pipe';
import { LocationComponent } from './components/home-area/location/location.component';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { SurveyComponent } from './components/home-area/survey/survey.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { ColorfulComponent } from './components/home-area/colorful/colorful.component';
import { HelpComponent } from './components/home-area/help/help.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WinterDirective } from './directives/winter.directive';
import { WinterSaleComponent } from './components/home-area/winter-sale/winter-sale.component';

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
    ColorBoxComponent,
    CouponComponent,
    NumToWordPipe,
    LocationComponent,
    PricingComponent,
    SurveyComponent,
    ClockComponent,
    ColorfulComponent,
    HelpComponent,
    HighlightDirective,
    WinterDirective,
    WinterSaleComponent
    
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
