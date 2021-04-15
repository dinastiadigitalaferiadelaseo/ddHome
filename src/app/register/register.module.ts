import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
