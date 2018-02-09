import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

import { UserCampaignAssignment } from '../models/UserCampaignAssignment';
import { AppHelpersService } from '../services/app-helpers.service'

@Injectable()
export class ClientService {
    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {

    }
    public userCampaignAssignments: UserCampaignAssignment[] = [];

    public loadUserCampaignAssignments(clientId: number): Observable<UserCampaignAssignment[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/client/assignments?clientId=" + clientId,
            { headers: httpHeaders })
            .map((result: Response) => {
                this.userCampaignAssignments = result.json();
                return this.userCampaignAssignments;
            }
            ).catch(this.handleError);
    }


    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}