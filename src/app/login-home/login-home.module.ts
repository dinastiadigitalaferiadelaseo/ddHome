import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginHomeRoutingModule } from './login-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginHomePageComponent } from './login-home-page/login-home-page.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [HeaderComponent, LoginHomePageComponent],
  imports: [
    CommonModule,
    LoginHomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ]
})
export class LoginHomeModule { }
