import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EncyclopediaComponent} from './encyclopedia.component';

const routes: Routes = [
    {
        path: '', component: EncyclopediaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EncyclopediaRoutingModule {
}
