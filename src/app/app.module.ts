import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TapasListComponent } from './tapas/tapas/tapas-list/tapas-list.component';
import { TapasMapComponent } from './tapas/tapas/tapas-map/tapas-map.component';
import { TapasComponent } from './tapas/tapas/tapas.component';
import { TapaDetailComponent } from './tapas/tapas/tapa-detail/tapa-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TapasListComponent,
    TapasMapComponent,
    TapasComponent,
    TapaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
