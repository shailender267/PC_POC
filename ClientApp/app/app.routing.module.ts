import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { SiteComponent} from './site/site.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent 
    },
    {
        path: 'account',
        component: AccountComponent
    },  
    {
        path: 'contact',
        component: ContactComponent
    },  
    {
        path: 'site/:id',
        component: SiteComponent
    },  
    {
        path: '**',
        redirectTo: 'home'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { } 