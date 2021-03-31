import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { VisionPageComponent } from './vision-page/vision-page.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [VisionPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    VisionRoutingModule
  ]
})
export class VisionModule { }
