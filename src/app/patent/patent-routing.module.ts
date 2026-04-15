import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatentComponent} from './patent.component';
const routes: Routes = [
    {path: '', component: PatentComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PatentRoutingModule { }
