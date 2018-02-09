import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { HomeModule } from '../app/home/home.module';
import { AccountModule } from '../app/account/account.module';
import { ContactModule } from '../app/contact/contact.module';
import { SiteModule } from '../app/site/site.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderSearchComponent } from './shared/header/header-search/header-search.component';

import { AppHelpersService } from './services/app-helpers.service';
import { CampaignService } from './services/campaign.service';
import { ClientService } from './services/client.service';
import { AccountService } from './services/account.service';
import { HomeProviderService } from './services/home-provider.service';
import { ContactService } from './services/contact.service';
import { SiteService } from './services/site.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeaderSearchComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HomeModule,
        AccountModule,
        ContactModule,
        SiteModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        HeaderSearchComponent,
    ],
    providers: [
        AppHelpersService,
        CampaignService,
        ClientService,
        AccountService,
        HomeProviderService,
        ContactService,
        SiteService
    ]
})
export class CoreModule {
}
