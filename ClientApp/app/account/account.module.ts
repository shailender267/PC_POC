import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AccountComponent } from '../account/account.component';
import { AccountBranchComponent} from '../account/account-branch/account-branch.component'
import { AccountDetailsComponent} from '../account/account-details/account-details.component'
import { AppModuleShared } from '../../app/app.shared.module'


@NgModule({
    declarations: [        
        AccountComponent,
        AccountBranchComponent,
        AccountDetailsComponent
       
    ],
    imports: [
        CommonModule,
        AppModuleShared
    ],

    providers: [
       
    ]
})
export class AccountModule {
}
