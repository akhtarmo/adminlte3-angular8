import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutModule } from '../layout/layout.module';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [DashboardComponent, HomepageComponent, TasksComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule { }
