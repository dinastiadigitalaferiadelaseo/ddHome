import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaOfertaRoutingModule } from './historia-oferta-routing.module';
import { HistoryOfertComponent } from './history-ofert/history-ofert.component';


@NgModule({
  declarations: [HistoryOfertComponent],
  imports: [
    CommonModule,
    HistoriaOfertaRoutingModule
  ]
})
export class HistoriaOfertaModule { }
