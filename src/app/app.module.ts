import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {ErrorComponent} from './error/error.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { BioComponent } from './bio/bio.component';
import { DstuComponent } from './dstu/dstu.component';
import {CacheService} from './cache.service';
import {Interceptor} from './interceptor';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'encyclopedia_of_scientists', loadChildren: './encyclopedia/encyclopedia.module#EncyclopediaModule'},
    {path: 'books', loadChildren: './books/books.module#BooksModule'},
    {path: 'patent', loadChildren: './patent/patent.module#PatentModule'},
    {path: 'jubilee', loadChildren: './jubilee/jubilee.module#JubileeModule'},
    {path: 'exhibition', loadChildren: './exhibition/exhibition.module#ExhibitionModule'},
    {path: 'bio', component: BioComponent},
    {path: 'standards', component: DstuComponent },
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ErrorComponent,
        BioComponent,
        DstuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        }),
        NgxPageScrollCoreModule.forRoot({duration: 1000}),
        NgxPageScrollModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        ReactiveFormsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'production-ua' },
        CacheService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
