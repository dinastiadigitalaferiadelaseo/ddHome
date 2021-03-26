import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesProyectoRoutingModule } from './detalles-proyecto-routing.module';
import { HeaderComponent } from './header/header.component';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgwWowModule } from 'ngx-wow';
import { ParticiparProyectComponent } from './participar-proyect/participar-proyect.component';


@NgModule({
  declarations: [HeaderComponent, DetallesProyectoComponent, ParticiparProyectComponent],
  imports: [
    CommonModule,
    DetallesProyectoRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgwWowModule,
    
  ]
})
export class DetallesProyectoModule { }
