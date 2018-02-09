import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common'


import { BaseChartComponent } from './../assets/lib/base-chart.component';
import { ChartComponent } from './../assets/lib/chart.component';



//For d3 Tooltip
import { TooltipDirective } from '../assets/lib/tooltip/tooltip.directive';
import { TooltipContentComponent } from '../assets/lib/tooltip/tooltip.component';
import { TooltipService } from '../assets/lib/tooltip/tooltip.service';
import { InjectionService } from '../assets/lib/tooltip/injection.service';

@NgModule({
    declarations: [
        BaseChartComponent,
        ChartComponent,
        TooltipContentComponent,        
        TooltipDirective
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [TooltipDirective, BaseChartComponent, ChartComponent],
    entryComponents: [TooltipContentComponent],
    providers: [     
        TooltipService,
        InjectionService,
        TitleCasePipe
    ]
})
export class AppModuleShared {
}
