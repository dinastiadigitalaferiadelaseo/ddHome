import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionPageComponent } from './vision-page/vision-page.component';

const routes: Routes = [
  {
    path: '', component: VisionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionRoutingModule { }
