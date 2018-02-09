import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service'
import { HomeProviderService } from '../../services/home-provider.service'
import { AccountDetail } from '../../models/AccountDetail'

@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
    expandChampions: boolean = false;
    expandRatifiers: boolean = false;
    public accountDetail: AccountDetail;

    constructor(private accountService: AccountService, public homeProviderService: HomeProviderService) { }

    ngOnInit() {
    }

}