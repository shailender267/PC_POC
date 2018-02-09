import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AppHelpersService {

    private _httpHeaders: Headers;
    public get httpHeaders(): Headers {
        this._httpHeaders = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'dataType': 'json',
            'crossDomain': 'true'
        });
        return this._httpHeaders;
    }

    private _apiAddress: string;
    public get apiAddress(): string {
        let hostname = window.location.hostname.toLowerCase();

        if (hostname.toLowerCase().indexOf('dev') >= 0) {
            this._apiAddress = 'http://devttcampaign.televerde.com/';//Add Dev URL
        } else if (hostname.toLowerCase().indexOf('qa') >= 0) {
            this._apiAddress = '';//Add QA URL
        } else if (hostname.toLowerCase().indexOf('uat') >= 0) {
            this._apiAddress = '';//Add UAT URL
        } else {
            this._apiAddress = 'http://campaigns.api:90/';//Localhost URL
        }
        return this._apiAddress;
    }

}

