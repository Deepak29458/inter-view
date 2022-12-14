import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideAndTopNavComponent } from './side-and-top-nav/side-and-top-nav.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { StaticGraphsComponent } from './static-graphs/static-graphs.component';
import { TablesComponent } from './tables/tables.component';
import { LineChartComponent } from './static-graphs/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './static-graphs/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './static-graphs/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './static-graphs/radar-chart/radar-chart.component';
import { PieChartComponent } from './static-graphs/pie-chart/pie-chart.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { RootStoreModule } from '../@ngrx/root-store.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [
    SideAndTopNavComponent,
    StaticGraphsComponent,
    TablesComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    Table2Component,
    Table3Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgChartsModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
