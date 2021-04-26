import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductComponent } from './detalle-product/detalle-product.component';
import { MDBBootstrapModule } from 'projects/angular-bootstrap-md/src/public_api';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from '@angular/forms';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [DetalleProductComponent],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    FormsModule,
    AngularFullpageModule,
  ]
})
export class DetalleProductoModule { }
