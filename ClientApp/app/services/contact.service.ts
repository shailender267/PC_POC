import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

import { AppHelpersService } from '../services/app-helpers.service'
import { Responder } from '../models/Responder';

@Injectable()
export class ContactService {
    constructor(private http: Http, private appHelpersSvc: AppHelpersService) {

    }
    public responder: Responder[] = [];

    public getContactInformation(contactId: number): Observable<Responder[]> {
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/Contact/" + contactId,
            { headers: httpHeaders })
            .map((result: Response) => {
            }
            ).catch(this.handleError);
    }
    handleError(error: Response) {       
        return Observable.throw(error.json().error || 'Server error');
    }
}