import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { Home1Component } from './home/home1/home1.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { Home2Component } from './home/home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    Home1Component,
    HomeDetailComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
