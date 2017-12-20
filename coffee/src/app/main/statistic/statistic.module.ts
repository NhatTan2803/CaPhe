import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatisticService } from './statistic.service';
import { FormsModule } from '@angular/forms'
import { StatisticComponent } from './statistic.component';
import {ChartModule} from 'angular2-chartjs'
const routes: Routes = [
  { path: '', component: StatisticComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    RouterModule.forChild(routes),
  ],
  providers: [StatisticService],
  declarations: [StatisticComponent]
})
export class StatisticModule { }
