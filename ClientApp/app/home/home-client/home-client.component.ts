import {
    Component,
    ContentChild,
    ElementRef,
    HostListener,
    Input,
    TemplateRef,
    ViewChild,
    Output,
    ViewEncapsulation,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    forceCollide,
    forceLink,
    forceManyBody,
    forceSimulation,
    forceX,
    forceY
} from 'd3-force';

import { ChartComponent } from '../../../assets/lib/chart.component';
import { BaseChartComponent } from '../../../assets/lib/base-chart.component';

@Component({
    selector: 'home-client',
    templateUrl: './home-client.component.html',
    styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent extends BaseChartComponent {

    @Input() force: any = forceSimulation<any>()
        .force('charge', forceManyBody())
        .force('collide', forceCollide(5))
        .force('x', forceX())
        .force('y', forceY());

    @Input() forceLink: any = forceLink<any, any>().id(node => node.value);
    @Input() nodes: any[] = [];
    @Input() links: Array<{ source: any, target: any }> = [];
    @Input() homeProviderService: any;

    dims: ViewDimensions;
    draggingNode: any;
    draggingStart: { x: number, y: number };
    margin = [0, 0, 0, 0];
    results = [];
    seriesDomain: any;
    transform: string;
    rectTransform: string;
    legendOptions: any;
    selectedNode: any;
    rectWidth: number;
    rectHeight: number = 30;

    @Input() groupResultsBy: (node: any) => string = node => node.value;

    update(): void {
        this.dims = { width: 1000, height: 700, xOffset: 10 };
        this.dims.xOffset = 10;
        this.transform = `
      translate(${ (900 / 2)}, ${550 / 2})
    `;
        if (this.force) {
            this.force.nodes(this.nodes)
                .force('link', this.forceLink.links(this.links))
                .alpha(0.5).restart();
        }
    }
    getRectTransform(node: any) {
        let width = this.getRectWidth(node);
        if (node.clientName === '') {
            return `
      translate(${ (node.x *6 - 55)}, ${((node.y *6) + 20)})
    `;
        }
        else {
            var xHub = this.nodes.filter(x => x.value == node.clientName)[0].x;
            if (node.x > xHub) {
                return `
      translate(${ (node.x *6)}, ${((node.y *6) - 15)})
    `;
            }
            else {
                return `
      translate(${ ((node.x *6) - width)}, ${((node.y *6) - 15)})
    `;
            }
        }
    }
    getClientNameTransform(node: any) {
        return `
      translate(${ ((node.x *6) - 70)}, ${((node.y *6) + 30)})
    `;
    }
    getCircleTransform(node: any) {
        let width = this.getRectWidth(node);
        if (node.clientName === '') {
            return `
      translate(${ (node.x *6 - 55)}, ${((node.y *6) + 20)})
    `;
        }
        else {
            var xHub = this.nodes.filter(x => x.value == node.clientName)[0].x;
            if (node.x > xHub) {
                return `
      translate(${ ((node.x *6) + width)}, ${((node.y *6))})
    `;
            }
            else {
                return `
      translate(${ ((node.x *6) - width)}, ${((node.y *6))})
    `;
            }
        }
    }
    getCentreCircleTransform(node: any) {
        let width = this.getRectWidth(node);
        if (node.clientName === '') {
            return `
      translate(${ (node.x *6 - 55)}, ${((node.y *6) + 20)})
    `;
        }
        else {
            var xHub = this.nodes.filter(x => x.value == node.clientName)[0].x;
            if (node.x > xHub) {
                return `
      translate(${ ((node.x *6) + width / 2)}, ${((node.y *6) + 30)})
    `;
            }
            else {
                return `
      translate(${ ((node.x *6) - width / 2)}, ${((node.y *6) + 30)})
    `;
            }
        }
    }
    getRectWidth(node: any): number {
        if (node.value.length <= 18)
            return 180;
        else
            return 250;
    }
    getCampaignName(node: any): string {
        if (node.value.length <= 28)
            return node.value
        else
            return node.value.substr(0, 25) + '...';
    }
    getAccounts(data: any): void {
        this.resetSelection();
        this.selectedNode = data;
        this.selectedNode.isAccountSelected = true;
        this.homeProviderService.getCampaignAccounts(this.selectedNode.id)

    }
    getResponders(data: any): void {
        this.resetSelection();
        this.selectedNode = data;
        this.selectedNode.isResponderSelected = true;
        this.homeProviderService.getCampaignResponders(this.selectedNode.id)
    }
    getDeliverables(data: any): void {
        this.resetSelection();
        this.selectedNode = data;
        this.selectedNode.isDeliverableSelected = true;
        this.homeProviderService.getCampaignDeliverables(this.selectedNode.id)
    }

    trackLinkBy(index: any, link: any): any {
        return link.index;
    }

    trackNodeBy(index: any, node: any): any {
        return node.value;
    }
    resetSelection() {
        this.nodes.forEach(function (node) {
            node.isAccountSelected = false;
            node.isDeliverableSelected = false;
            node.isResponderSelected = false;
        });
    }
}
export interface ViewDimensions {
    width: number;
    height: number;
    xOffset: number;
}