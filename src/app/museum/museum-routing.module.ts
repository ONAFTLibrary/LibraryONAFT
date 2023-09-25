import {NgModule} from '@angular/core';
import {MuseumComponent} from './museum.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '', component: MuseumComponent
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MuseumRoutingModule {
}
