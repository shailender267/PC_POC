import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

import { AccountService } from './account.service'
import { CampaignService } from './campaign.service'
import { ClientService } from './client.service'
import { Campaign } from '../models/Campaign';
import { UserCampaignAssignment } from '../models/UserCampaignAssignment';
import { AccountDetail } from '../models/AccountDetail';
import { Responder } from '../models/Responder';
import { Deliverable } from '../models/Deliverable';

@Injectable()
export class HomeProviderService {
    constructor(private http: Http, private accountService: AccountService, public campaignService: CampaignService, public clientService: ClientService) {

    }
    graph: { links: any[], nodes: any[] };
    view: any[];
    public selectedCampaign: Campaign;
    public userCampaignAssignment: UserCampaignAssignment[] = [];
    public campaigns: Campaign[];
    public accountList: AccountDetail[];
    public responderList: Responder[];
    public deliverableList: Deliverable[];
    public selectedAccount: AccountDetail;
    public selectedContact: Responder;
    public loadAccounts: boolean = false;
    public loadDeliverables: boolean = false;
    public loadResponders: boolean = false;
    public loadingList: boolean = false;
    public loadingResult: boolean = false;

    selectChart() {
        Object.assign(this, {
            graph: this.generateHomeGraph()
        });
    }
    generateHomeGraph() {
        const nodeCount: number = this.userCampaignAssignment.length;
        const nodes = [];
        const links = [];
        nodes.push({
            value: this.selectedCampaign.clientName,
            id: 0,
            numberOfAccountsAssined: 0,
            assignedDeliverablesForCampaign: 0,
            numberOfRespondersAssigned: 0,
            clientName: ''
        })
        for (let i = 0; i < nodeCount; i++) {
            const userCampaign = this.userCampaignAssignment[i];
            nodes.push({
                value: userCampaign.campaignName == '' ? userCampaign.clientName : userCampaign.campaignName,
                id: userCampaign.campaignName == '' ? userCampaign.clientId : userCampaign.campaignId,
                assignedDeliverablesForCampaign: userCampaign.assignedDeliverablesForCampaign,
                numberOfAccountsAssined: userCampaign.numberOfAccountsAssined,
                numberOfRespondersAssigned: userCampaign.numberOfRespondersAssigned,
                clientName: userCampaign.campaignName == '' ? '' : userCampaign.clientName,
                isAccountSelected: false,
                isDeliverableSelected: false,
                isResponderSelected: false,
            });
            if (i >= 0) {
                links.push({
                    source: userCampaign.campaignName,
                    target: userCampaign.clientName
                });
            }
        }
        return { links, nodes };
    }

    reset() {
        this.loadAccounts = false;
        this.loadResponders = false;
        this.loadDeliverables = false;
    }
    public getCampaignAccounts(campaignId: number) {
        if (this.selectedCampaign) {
            this.loadingList = true;
            this.reset();
            this.loadAccounts = true;
            this.accountList = [];
            this.accountService.loadCampaignAccounts(campaignId).subscribe(
                data => {
                    this.accountList = data;
                    this.loadingList = false;
                },
                error => {
                    this.loadingList = false;
                });
        }
    }
    public getCampaignResponders(campaignId: number) {
        if (this.selectedCampaign) {
            this.loadingList = true;
            this.reset();
            this.loadResponders = true;
            this.responderList = [];
            this.campaignService.loadResponders(campaignId).subscribe(
                data => {
                    this.responderList = data;
                    this.loadingList = false;
                },
                error => {
                    this.loadingList = false;
                });
        }

    }
    public getCampaignDeliverables(campaignId: number) {
        if (this.selectedCampaign) {
            this.loadingList = true;
            this.reset();
            this.loadDeliverables = true;
            this.deliverableList = [];
            this.campaignService.loadDeliverables(campaignId).subscribe(
                data => {
                    this.deliverableList = data;
                    this.loadingList = false;
                },
                error => {
                    this.loadingList = false;
                });
        }

    }
   public setClientData() {
        this.loadingResult = true;
        this.clientService.loadUserCampaignAssignments(this.selectedCampaign.clientId).subscribe(
            data => {
                this.userCampaignAssignment = data;
                this.selectChart();
                this.reset();
                this.loadingResult = false;               
            },
            error => {
                this.loadingResult = false;
            });

    }
}