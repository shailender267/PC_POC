import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabModule } from '../../assets/lib/angular-tabs-component/dist/angular-tabs-component.module'

import { SiteComponent } from '../site/site.component';
import { SiteContactComponent } from '../site/site-contact/site-contact.component'
import { SiteLibraryComponent } from '../site/site-library/site-library.component'
import { SiteListOfContactsComponent } from '../site/site-listOfContacts/site-listOfContacts.component'
import { SiteHistroyComponent } from '../site/site-history/site-history.component'

import { AppModuleShared } from '../../app/app.shared.module'

@NgModule({
    declarations: [
        SiteComponent,
        SiteContactComponent,
        SiteLibraryComponent,
        SiteListOfContactsComponent,
        SiteHistroyComponent
    ],
    imports: [
        CommonModule,
        AppModuleShared,
        TabModule
    ],

    providers: [

    ]
})


export class SiteModule {
}
