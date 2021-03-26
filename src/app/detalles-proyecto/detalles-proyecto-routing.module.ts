import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto.component';


const routes: Routes = [
  {
    path: '', component: DetallesProyectoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesProyectoRoutingModule { }
