import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JubileeComponent} from './jubilee.component';
import {JubileeRoutingModule} from './jubilee-routing.module';

@NgModule({
    declarations: [
        JubileeComponent
    ],
    imports: [
        CommonModule,
        JubileeRoutingModule
    ]
})
export class JubileeModule {
}
