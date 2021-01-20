import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExhibitionComponent} from './exhibition.component';
import {ExhibitionRoutingModule} from './exhibition-routing.module';

@NgModule({
    declarations: [
        ExhibitionComponent
    ],
    imports: [
        CommonModule,
        ExhibitionRoutingModule
    ]
})
export class ExhibitionModule {
}
