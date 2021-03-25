import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponentsRoutingModule } from './home-components-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent, 
    ProyectsComponent
  ],
  imports: [
    CommonModule,
    HomeComponentsRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ],
})
export class HomeComponentsModule { }
