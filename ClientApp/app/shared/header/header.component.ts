import { Component, OnInit } from '@angular/core';

import { CampaignService } from '../../services/campaign.service';
import { HomeProviderService } from '../../services/home-provider.service';
import { ClientService } from '../../services/client.service';

import { Campaign } from '../../models/Campaign';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private campaignService: CampaignService, public homeProviderService: HomeProviderService, private clientService: ClientService) { }

    ngOnInit() {
        this.homeProviderService.loadingResult = true;
        this.campaignService.loadCampaignList().subscribe(
            data => {
                this.homeProviderService.campaigns = data;
                this.homeProviderService.loadingResult = false;
            },
            error => {
                this.homeProviderService.loadingResult = false;
            });

    }
    onClientChange(selectedCampaignId: number) {
        let selectedCampaign = this.homeProviderService.campaigns.find(function (element) {
            return element.campaignId == selectedCampaignId;
        });
        if (selectedCampaign) {
            this.homeProviderService.selectedCampaign = selectedCampaign;
            this.homeProviderService.setClientData();
        }
    }

}