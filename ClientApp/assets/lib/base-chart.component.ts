import {
    ElementRef, NgZone, ChangeDetectorRef, Component, Input,
    Output, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { VisibilityObserver } from './visibility-observer';

@Component({
    selector: 'base-chart',
    template: `<div></div>`
})
export class BaseChartComponent implements OnChanges, AfterViewInit, OnDestroy {

    @Input() results: any;
    @Input() view: number[];

    @Output() select = new EventEmitter();   
    @Output() selectContact = new EventEmitter();   

    width: number;
    height: number;
    resizeSubscription: any;
    visibilityObserver: VisibilityObserver;

    constructor(
        protected chartElement: ElementRef,
        protected zone: NgZone,
        protected cd: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        // listen for visibility of the element for hidden by default scenario
        this.visibilityObserver = new VisibilityObserver(this.chartElement, this.zone);
        this.visibilityObserver.visible.subscribe(this.update.bind(this));
    }

    ngOnDestroy(): void {
        this.unbindEvents();
        if (this.visibilityObserver) {
            this.visibilityObserver.visible.unsubscribe();
            this.visibilityObserver.destroy();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    update(): void {

    }

    protected unbindEvents(): void {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }
}
