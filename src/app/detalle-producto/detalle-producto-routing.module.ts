import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductComponent } from './detalle-product/detalle-product.component';

const routes: Routes = [
  {
    path: '', component: DetalleProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleProductoRoutingModule { }
