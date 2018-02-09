import { Component, OnInit } from '@angular/core';

import { Contact } from '../../models/Contact'
import { SiteService } from '../../services/site.service'

@Component({
    selector: 'site-listOfContacts',
    templateUrl: './site-listOfContacts.component.html',
    styleUrls: ['./site-listOfContacts.component.css', '../site.component.css']
})
export class SiteListOfContactsComponent implements OnInit {
    constructor(private siteService: SiteService) { }

    public contacts: Contact[];

    ngOnInit() {
        if (this.siteService.selectedSite && this.siteService.selectedSite.siteId > 0)
            this.siteService.getListOfContactsBySiteId(this.siteService.selectedSite.siteId).subscribe(
                data => {
                    this.contacts = data;
                    if (data && data.length > 0)
                        this.siteService.primaryContact = data[0];                  
                }
            );
    }


}
