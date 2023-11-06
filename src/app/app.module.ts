import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightpageComponent } from './rightpage/rightpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StickerComponent } from './sticker/sticker.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { StyledTextComponent } from './styled-text/styled-text.component';
import { CreditComponent } from './credit/credit.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { SizesTypeComponent } from './sizes-type/sizes-type.component';
import { TopinfoComponent } from './topinfo/topinfo.component';
import { HowmanyComponent } from './howmany/howmany.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LeftPageComponent,
    RightpageComponent,
    NavigationComponent,
    SearchbarComponent,
    StickerComponent,
    CardsComponent,
    CardComponent,
    StyledTextComponent,
    CreditComponent,
    PaypalComponent,
    PaymentTypeComponent,
    SizesTypeComponent,
    TopinfoComponent,
    HowmanyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
