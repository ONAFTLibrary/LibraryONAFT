import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MuseumComponent} from './museum.component';
import {MuseumRoutingModule} from './museum-routing.module';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
      CommonModule,
      MuseumRoutingModule,
      OrderModule
  ],
    declarations: [
    MuseumComponent
  ]
})
export class MuseumModule { }
