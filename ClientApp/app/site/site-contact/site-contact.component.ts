import { Component, OnInit } from '@angular/core';

import { SiteService } from '../../services/site.service'

@Component({
    selector: 'site-contact',
    templateUrl: './site-contact.component.html',
    styleUrls: ['./site-contact.component.css', '../site.component.css']
})
export class SiteContactComponent implements OnInit {

    constructor(private siteService: SiteService) { }

    ngOnInit() {
       
    }
}
