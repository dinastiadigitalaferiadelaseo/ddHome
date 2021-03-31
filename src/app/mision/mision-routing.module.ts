import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisionPageComponent } from './mision-page/mision-page.component';

const routes: Routes = [
  {
    path: '',component: MisionPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionRoutingModule { }
