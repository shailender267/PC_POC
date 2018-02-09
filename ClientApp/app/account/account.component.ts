import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as shape from 'd3-shape';

import { SiteService } from '../services/site.service'
import { AccountService } from '../services/account.service'
import { HomeProviderService } from '../services/home-provider.service'
import { Account } from '../models/Account'

@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    graph: { links: any[], nodes: any[] };
    view: any[];
    public accountDetail: Account[] = [];

    constructor(private accountService: AccountService, private siteService: SiteService, private route: ActivatedRoute, private router: Router, private homeProviderService: HomeProviderService) { }

    ngOnInit() {
        if (this.homeProviderService.selectedAccount)
            this.setAaccountData();
    }

    setAaccountData() {
        this.accountService.loadAccountSitesHierarchy(this.homeProviderService.selectedAccount.accountId).subscribe(
            data => {
                this.accountDetail = data;
                this.selectChart();
            }
        );

    }
    selectChart() {
        Object.assign(this, {
            graph: this.generateGraph()
        });
    }
    generateGraph() {
        const nodeCount: number = this.accountDetail.length;
        const nodes = [];
        const links = [];
        const hub = this.accountDetail.filter(x => x.isHeadQuarter)[0].value;
        for (let i = 0; i < nodeCount; i++) {
            if (this.accountDetail[i].parentHeadQuarter == null || this.accountDetail[i].parentHeadQuarter == hub) {
                const country = this.accountDetail[i];
                nodes.push({
                    value: country.location,
                    id: country.value,
                    champions: country.champions,
                    contacts: country.contacts,
                    isHeadQuarter: country.isHeadQuarter,
                    handRaised: country.handRaised,
                    influences: country.influences,
                    parentHeadQuarter: country.parentHeadQuarter,
                    isRegionalHeadQuarter: country.isRegionalHeadQuarter,
                    isDomesticHeadquarter: country.isDomesticHeadquarter,
                    hasAdditionalInfo: country.hasAdditionalInfo,
                    siteName: country.name,
                    localEmployeeCount: country.localEmployeeCount,
                    revenue: country.revenue,
                    revenueCurrency : country.revenueCurrency
                });
                if (i > 0) {
                    links.push({
                        source: country.value,
                        target: country.parentHeadQuarter
                    });
                }
            }
        }
        return { links, nodes };
    }
    generateSubGraph(node: any) {
        const nodeCount: number = this.accountDetail.length;
        const nodes = [];
        const links = [];
        node.isHeadQuarter = true;
        nodes.push(node);
        for (let i = 0; i < nodeCount; i++) {
            if (this.accountDetail[i].parentHeadQuarter == node.id) {
                const country = this.accountDetail[i];
                nodes.push({
                    value: country.location,
                    id: country.value,
                    champions: country.champions,
                    contacts: country.contacts,
                    isHeadQuarter: country.isHeadQuarter,
                    handRaised: country.handRaised,
                    influences: country.influences,
                    parentHeadQuarter: country.parentHeadQuarter,
                    isRegionalHeadQuarter: country.isRegionalHeadQuarter,
                    isDomesticHeadquarter: country.isDomesticHeadquarter,
                    hasAdditionalInfo: country.hasAdditionalInfo,
                    siteName: country.name,
                    localEmployeeCount: country.localEmployeeCount,
                    revenue: country.revenue,
                    revenueCurrency: country.revenueCurrency
                });
                if (i > 0) {
                    links.push({
                        source: country.value,
                        target: country.parentHeadQuarter
                    });
                }
            }
        }
        return { links, nodes };
    }
    generateSubGraphForCollapse(node: any) {
        const nodeCount: number = this.accountDetail.length;
        const nodes = [];
        const links = [];
        const hub = this.accountDetail.filter(x => x.value == node.parentHeadQuarter)[0];
        nodes.push({
            value: hub.location,
            id: hub.value,
            champions: hub.champions,
            contacts: hub.contacts,
            isHeadQuarter: true,
            handRaised: hub.handRaised,
            influences: hub.influences,
            parentHeadQuarter: hub.parentHeadQuarter,
            isRegionalHeadQuarter: hub.isRegionalHeadQuarter,
            isDomesticHeadquarter: hub.isDomesticHeadquarter,
            siteName: hub.name,
            localEmployeeCount: hub.localEmployeeCount,
            revenue: hub.revenue,
            revenueCurrency: hub.revenueCurrency
        });
        for (let i = 0; i < nodeCount; i++) {
            if (this.accountDetail[i].parentHeadQuarter == hub.value) {
                const country = this.accountDetail[i];
                nodes.push({
                    value: country.location,
                    id: country.value,
                    champions: country.champions,
                    contacts: country.contacts,
                    isHeadQuarter: country.isHeadQuarter,
                    handRaised: country.handRaised,
                    influences: country.influences,
                    parentHeadQuarter: country.parentHeadQuarter,
                    isRegionalHeadQuarter: country.isRegionalHeadQuarter,
                    isDomesticHeadquarter: country.isDomesticHeadquarter,
                    hasAdditionalInfo: country.hasAdditionalInfo,
                    siteName: country.name,
                    localEmployeeCount: country.localEmployeeCount,
                    revenue: country.revenue,
                    revenueCurrency: country.revenueCurrency
                });
                if (i > 0) {
                    links.push({
                        source: country.value,
                        target: country.parentHeadQuarter
                    });
                }
            }
        }
        return { links, nodes };
    }
    select(data: any) {
        if (data.isHeadQuarter) {
            Object.assign(this, {
                graph: this.generateSubGraphForCollapse(data),
            });
        }
        else if (data.isRegionalHeadQuarter || data.isDomesticHeadquarter) {
            Object.assign(this, {
                graph: this.generateSubGraph(data),
            });
        }
    }

    selectContact(node: any) {
        if (node) {
            this.siteService.selectedSite = {
                masterSiteId: 0,
                accountId: 0,
                city: '',
                country: '',
                industry: '',
                postalCode: '',
                siteAddress1: '',
                siteAddress2: '',
                state : '',
                siteId: node.id,
                siteName: node.siteName,
                localEmployeeCount: node.localEmployeeCount,
                revenue: node.revenue,
                revenueCurrency: node.revenueCurrency
            };
            this.router.navigate(['/site/' + node.id]);
        }
    }
}
