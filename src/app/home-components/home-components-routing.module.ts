import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { HomepageComponent } from'./homepage/homepage.component';
import { ProyectsComponent } from './proyects/proyects.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'poryectos', component: ProyectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeComponentsRoutingModule { }
