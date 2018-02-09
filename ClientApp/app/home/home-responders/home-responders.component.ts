import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common'
import { HomeProviderService } from '../../services/home-provider.service';
import { ContactService } from '../../services/contact.service'
import { Responder } from '../../models/Responder';

@Component({
    selector: 'home-responders',
    templateUrl: './home-responders.component.html',
    styleUrls: ['./home-responders.component.css']
})
export class HomeRespondersComponent {

    constructor(private router: Router,
        public homeProviderService: HomeProviderService, public contactService: ContactService,
        private titlecasePipe: TitleCasePipe) { }

    ngOnInit() {
       
    }
    openResponder(responder: Responder) {
        this.homeProviderService.selectedContact = responder;
        this.router.navigate(['/contact']);
    }
}
