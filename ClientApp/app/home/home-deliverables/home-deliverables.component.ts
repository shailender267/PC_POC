import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common'
import { HomeProviderService } from '../../services/home-provider.service';
import { testHomeDeliverables, HomeDeliverables } from '../../../assets/lib/data'

@Component({
    selector: 'home-deliverables',
    templateUrl: './home-deliverables.component.html',
    styleUrls: ['./home-deliverables.component.css']
})
export class HomeDeliverablesComponent {

    constructor(private router: Router,
                public homeProviderService: HomeProviderService,
                private titlecasePipe: TitleCasePipe) { }

    public deliverablesList: HomeDeliverables[];

    ngOnInit() {

    }
    openDeliverable(deliverable: HomeDeliverables) {
        //this.router.navigate(['/account/' + account.accountId]);
    }
}
