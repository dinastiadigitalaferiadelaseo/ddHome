import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionRoutingModule } from './mision-routing.module';
import { MisionPageComponent } from './mision-page/mision-page.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';
import { HomeComponentsModule } from '../home-components/home-components.module';


@NgModule({
  declarations: [MisionPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    MisionRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    HomeComponentsModule
  ]
})
export class MisionModule { }
