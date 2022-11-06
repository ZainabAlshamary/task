import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:"daily-reports",component:DailyReportsComponent}
]

@NgModule({
  declarations: [
    DailyReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ReportsModule { }
