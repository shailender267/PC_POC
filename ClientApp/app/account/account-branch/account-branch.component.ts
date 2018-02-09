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
    selector: 'account-branch',
    templateUrl: './account-branch.component.html',
    styleUrls: ['./account-branch.component.css']
})
export class AccountBranchComponent extends BaseChartComponent {

    @Input() force: any = forceSimulation<any>()
        .force('charge', forceManyBody())
        .force('collide', forceCollide(5))
        .force('x', forceX())
        .force('y', forceY());

    @Input() forceLink: any = forceLink<any, any>().id(node => node.id);
    @Input() nodes: any[] = [];
    @Input() links: Array<{ source: any, target: any }> = [];

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
    rectWidth: number = 130;
    rectHeight: number = 30;
    outerCircleRadius: number = 20;
    campaignName: string;
    expandRatifiers: boolean = false;
    expandChampions: boolean = true;

    @Input() groupResultsBy: (node: any) => string = node => node.id;

    update(): void {
        this.dims = { width: 1200, height: 700, xOffset: 10 };
        this.dims.xOffset = 10;
        this.transform = `
      translate(${ (1200 / 2)}, ${600 / 2})
    `;
        if (this.force) {
            this.force.nodes(this.nodes)
                .force('link', this.forceLink.links(this.links))
                .alpha(0.5).restart();
        }
    }
    getRectTransform(node: any) {
        let width = this.getRectWidth(node);
        if (node.isHeadQuarter) {
            return `
      translate(${ (node.x * 8 - 50)}, ${((node.y * 8) + 35)})
    `;
        }
        else {
            var xHub = this.nodes.filter(x => x.id == node.parentHeadQuarter)[0].x;
            if (node.x > xHub) {
                return `
      translate(${ (node.x * 8)}, ${((node.y * 8) - this.rectHeight / 2)})
    `;
            }
            else {
                return `
      translate(${ ((node.x * 8) - width)}, ${((node.y * 8) - this.rectHeight / 2)})
    `;
            }
        }
    }
    getRegionalTransform(node: any) {
        let width = this.getRectWidth(node);
        if (node.isHeadQuarter) {
            return `
      translate(${ (node.x * 8 - 50)}, ${((node.y * 8) + 35)})
    `;
        }
        else {
            var xHub = this.nodes.filter(x => x.id == node.parentHeadQuarter)[0].x;
            var xOffset = node.x > 0 ? width : 0
            if (node.x > xHub) {
                return `
      translate(${ ((node.x * 8) + xOffset)}, ${((node.y * 8) - this.rectHeight / 2)})
    `;
            }
            else {
                return `
      translate(${ ((node.x * 8) - width)}, ${((node.y * 8) - this.rectHeight / 2)})
    `;
            }
        }
    }
    getRectWidth(node: any): number {
        if (node.siteName.length <= 10)
            return 120;
        else
            return ((node.siteName.length * 10) + 20);
    }
    onClick(data: any): void {
        this.selectedNode = data;
        if (!this.selectedNode.isHeadQuarter)
            this.selectedNode.hasAdditionalInfo = !this.selectedNode.hasAdditionalInfo;
    }
    getContacts(node: any) {
        this.selectContact.emit(node);
    }
    onExpand(data: any): void {
        this.select.emit(data);
    }
    trackLinkBy(index: any, link: any): any {
        return link.index;
    }

    trackNodeBy(index: any, node: any): any {
        return node.id;
    }

    getTextOffset_X(node: any): number {
        if (node.isHeadQuarter) {
            return 20;
        }
        else {
            var xHub = this.nodes.filter(x => x.id == node.parentHeadQuarter)[0].x;
            if (node.x > xHub) {
                return 22;
            }
            else {
                return 10;
            }
        }
    }
}
export interface ViewDimensions {
    width: number;
    height: number;
    xOffset: number;
}