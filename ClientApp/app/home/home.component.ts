import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

import { ClientService } from '../services/client.service';
import { HomeProviderService } from '../services/home-provider.service';
import { UserCampaignAssignment } from '../models/UserCampaignAssignment'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private clientService: ClientService, public homeProviderService: HomeProviderService) {

    }

    ngOnInit() {
        if (this.homeProviderService.selectedCampaign) {
            this.homeProviderService.setClientData();
        }
    }
}

