import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '' },
      { path: 'home1', component: Home1Component },
    ]
  },
  { path: 'second', component: SecondComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
