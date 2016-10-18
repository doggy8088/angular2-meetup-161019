import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const fallbackRoute: Route = {
  path: '**', component: Home1Component
};

export const home_routes: Routes = [
  { path: 'home', 
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home1' },
      { path: 'home1', component: Home1Component },
      { path: 'home2', component: Home2Component },
    ]
  }
];
