import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { VisionPageComponent } from './vision-page/vision-page.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';
import { HomeComponentsModule } from '../home-components/home-components.module';


@NgModule({
  declarations: [VisionPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    VisionRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    HomeComponentsModule
  ]
})
export class VisionModule { }
