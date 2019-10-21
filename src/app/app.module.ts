import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContextMenuModule } from 'ngx-contextmenu';
import { WelcomeComponent } from './welcome/welcome.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetailsComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule ,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
     RouterModule ,
     AppRoutingModule,
     ContextMenuModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
  // exports: [NgbdCarouselNavigation],

})
export class AppModule { }
