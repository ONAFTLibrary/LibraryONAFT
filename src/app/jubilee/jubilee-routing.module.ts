import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JubileeComponent} from './jubilee.component';
const  routes: Routes = [
    {path: '', component: JubileeComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class JubileeRoutingModule {
}
