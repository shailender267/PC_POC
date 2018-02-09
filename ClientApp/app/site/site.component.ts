import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../services/site.service'

import { Site } from '../models/Site'

@Component({
    selector: 'site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})

export class SiteComponent implements OnInit {

    public site: Site;

    constructor(private route: ActivatedRoute, private siteService: SiteService) {
    }

    ngOnInit() {
        if (this.route.snapshot != undefined && this.route.snapshot.params != undefined) {           
            this.getSiteDetails(this.route.snapshot.params['id']);
        }
    }

    getSiteDetails(siteId: number) {
        this.siteService.getSiteInformation(siteId).subscribe((response) => {
            this.site = response;
        });
    }

    siteAddress(site: Site): string {
        if (site.siteAddress2 != null && site.siteAddress2.length > 0 && site.siteAddress2.trim().length > 0)
            return site.siteAddress1 + ', ' + site.siteAddress2
        else
            return site.siteAddress1;
    }


}