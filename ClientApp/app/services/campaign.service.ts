import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import 'rxjs/add/operator/map';

import { AppHelpersService } from '../services/app-helpers.service'
import { Campaign } from '../models/Campaign';
import { Deliverable } from '../models/Deliverable';
import { Responder } from '../models/Responder';



@Injectable()
export class CampaignService {
    
    constructor(private http: Http, private appHelpersSvc: AppHelpersService, @Inject('BASE_URL') public baseUrl: string) {

    }

    public campaigns: Campaign[] = [];
    public actualCampaigns: Campaign[] = [];
    public campaign: Campaign;

    public loadCampaignList(): Observable<Campaign[]> {
 
        
        var httpHeaders = this.appHelpersSvc.httpHeaders;
        // this.appHelpersSvc.apiAddress + "api/campaign/all",        { headers: httpHeaders }
        let apiUrl = './assets/data/allcampaign.json';
        return this.http.get(this.baseUrl + 'api/SampleData/WeatherForecasts')
            .map((result: Response) => {
                this.campaigns = result.json();
                this.campaigns.forEach(
                    element => {
                        element.displayName = element.displayName.replace("|", "\\");
                        this.actualCampaigns.push(element);
                    }
                )
                return this.actualCampaigns;
            }
            ).catch(this.handleError);
    }

    public loadDeliverables(campaignId: number): Observable<Deliverable[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/Campaign/deliverables?campaignId=" + campaignId,
            { headers: httpHeaders })
            .map((result: Response) => {
                return result.json();
            }
            ).catch(this.handleError);
    }
    public loadResponders(campaignId: number): Observable<Responder[]> {

        var httpHeaders = this.appHelpersSvc.httpHeaders;
        return this.http.get(this.appHelpersSvc.apiAddress + "api/Campaign/responders?campaignId=" + campaignId,
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