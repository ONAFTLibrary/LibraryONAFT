import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncyclopediaComponent} from './encyclopedia.component';
import {EncyclopediaRoutingModule} from './encyclopedia-routing.module';

@NgModule({
    declarations: [
        EncyclopediaComponent
    ],
    imports: [
        CommonModule,
        EncyclopediaRoutingModule
    ]
})
export class EncyclopediaModule {
}
