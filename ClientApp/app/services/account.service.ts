import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

import { Account } from '../models/Account';
import { AccountDetail } from '../models/AccountDetail';
import { AppHelpersService } from '../services/app-helpers.service'

@Injectable()
export class AccountService {
    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {

    }
    public selectedAccountId: number;
    public accounts: Account[] = [];
    public accountDetail: AccountDetail;
    public campaignAccounts: AccountDetail[];

    public loadAccountSitesHierarchy(accountId: number): Observable<Account[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/accounts/hierarchy/" + accountId,
            { headers: httpHeaders })
            .map((result: Response) => {
                this.accounts = result.json();
                return this.accounts;
            }
            ).catch(this.handleError);
    }

    public loadCampaignAccounts(campaignId: number): Observable<AccountDetail[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/Accounts/all/" + campaignId,
            { headers: httpHeaders })
            .map((result: Response) => {
                this.campaignAccounts = result.json();
                return this.campaignAccounts;
            }
            ).catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}