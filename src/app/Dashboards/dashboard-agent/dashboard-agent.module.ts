import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAgentRoutingModule } from '../../Routes/dashboard-agent-routing.module';
import { DashboardAgentComponent } from './dashboard-agent.component';


@NgModule({
  declarations: [
    DashboardAgentComponent
  ],
  imports: [
    CommonModule,
    DashboardAgentRoutingModule
  ]
})
export class DashboardAgentModule { }
