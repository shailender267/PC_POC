import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeProviderService } from '../../services/home-provider.service';
import { AccountDetail } from '../../models/AccountDetail'

@Component({
    selector: 'home-account',
    templateUrl: './home-account.component.html',
    styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent {

    constructor(private router: Router, public homeProviderService: HomeProviderService) { }

    ngOnInit() {

    }
    openAccount(account: AccountDetail) {
        this.homeProviderService.selectedAccount = account;
        this.router.navigate(['/account']);
    }
}
