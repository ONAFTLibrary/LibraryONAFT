import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksComponent} from './books.component';
import {BooksRoutingModule} from './books-routing.module';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    imports: [
      CommonModule,
      BooksRoutingModule,
      OrderModule
  ],
    declarations: [
    BooksComponent
  ]
})
export class BooksModule { }
