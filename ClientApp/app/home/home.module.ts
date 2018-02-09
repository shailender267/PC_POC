import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { HomeClientComponent } from '../home/home-client/home-client.component';
import { HomeAccountComponent } from '../home/home-accounts/home-account.component';
import { HomeDeliverablesComponent } from '../home/home-deliverables/home-deliverables.component';
import { HomeRespondersComponent } from '../home/home-responders/home-responders.component';
import { AppModuleShared} from '../../app/app.shared.module'

@NgModule({
    declarations: [  
       
        HomeComponent,
        HomeClientComponent,
        HomeRespondersComponent,
        HomeAccountComponent,
        HomeDeliverablesComponent       
    ],
    imports: [
        CommonModule,
        AppModuleShared
    ],

    providers: [
       
    ]
})
export class HomeModule {
}
