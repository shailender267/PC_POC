import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

import { Site, SiteHistory } from '../models/Site';
import { Contact } from '../models/Contact';

import { AppHelpersService } from '../services/app-helpers.service'

@Injectable()

export class SiteService {

    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {

    }
    public selectedSite: Site;
    public primaryContact: Contact;

    public getSiteInformation(siteId: number): Observable<Site> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/site/siteDetails/" + siteId,
            { headers: httpHeaders })
            .map((result: Response) => {
                return result.json();
            }
            ).catch(this.handleError);
    }

    public getSiteActivityHistory(siteId: number): Observable<SiteHistory[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/site/siteHistroy/" + siteId,
            { headers: httpHeaders })
            .map((result: Response) => {
                return result.json();
            }
            ).catch(this.handleError);
    }

    public getListOfContactsBySiteId(siteId: number): Observable<Contact[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/Contact/all/" + siteId,
            { headers: httpHeaders })
            .map((result: Response) => {
                return result.json();
            }
            ).catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}