import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../../services/site.service'

import { Site, SiteHistory } from '../../models/Site'

@Component({
    selector: 'site-history',
    templateUrl: './site-history.component.html',
    styleUrls: ['./site-history.component.css']
})
export class SiteHistroyComponent implements OnInit {
    public siteActivityHistory: SiteHistory[];

    constructor(private route: ActivatedRoute, private siteService: SiteService) {
    }


    ngOnInit() {
        if (this.route.snapshot != undefined && this.route.snapshot.params != undefined) {
            this.getSiteAcitvityHistory(this.route.snapshot.params['id']);
        }
    }
    getSiteAcitvityHistory(siteId: number) {
        this.siteService.getSiteActivityHistory(siteId).subscribe((response) => {
            this.siteActivityHistory = response;
        });
    }

}
