import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [LoginPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
  ]
})
export class LoginModule { }
