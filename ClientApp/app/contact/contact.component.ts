import { Component, OnInit } from '@angular/core';

import { HomeProviderService } from '../services/home-provider.service'
import { ContactService } from '../services/contact.service'

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    constructor(public homeProviderService: HomeProviderService, public contactService: ContactService) { } 
    
    ngOnInit() {
        if (this.homeProviderService.selectedContact)
            this.getContactDetails();

    }
    getContactDetails() {
        this.contactService.getContactInformation(this.homeProviderService.selectedContact.contactId).subscribe(
            data => {
                console.log('reached');
            }
        ); 
    }
}
