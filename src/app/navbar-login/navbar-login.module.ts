import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarLoginRoutingModule } from './navbar-login-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    NavbarLoginRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavbarLoginModule { }
