import {
    Component, Input, OnChanges, ViewContainerRef, ChangeDetectionStrategy, EventEmitter,
    Output, SimpleChanges
} from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';


@Component({
    selector: 'ngx-charts-chart',
    template: `
    <div
      class="ngx-charts-outer"
      [style.width.px]="view[0]"
     >
      <svg
        class="ngx-charts"
        [attr.width]="chartWidth"
        [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
     </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChartComponent implements OnChanges {

    @Input() view: any;

    chartWidth: any;
    title: any;
    legendWidth: any;

    constructor(
        private vcr: ViewContainerRef) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    update(): void {
        let legendColumns = 0;
        const chartColumns = 12 - legendColumns;

        this.chartWidth = ~~(this.view[0] * chartColumns / 12.0);
        this.legendWidth = ~~(this.view[0] * legendColumns / 12.0);
    }


}
