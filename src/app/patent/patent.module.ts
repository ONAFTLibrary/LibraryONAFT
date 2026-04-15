import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatentComponent} from './patent.component';
import {PatentRoutingModule} from './patent-routing.module';

@NgModule({
    declarations: [
        PatentComponent
    ],
    imports: [
        CommonModule,
        PatentRoutingModule
    ]
})
export class PatentModule {
}
