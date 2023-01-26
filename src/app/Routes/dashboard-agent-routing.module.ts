import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAgentComponent} from "../Dashboards/dashboard-agent/dashboard-agent.component";

const routes: Routes = [
  { path:'',pathMatch:"full",redirectTo:"dashboard"},
  {
    path:"dashboard",
    component: DashboardAgentComponent,
    // children:[
    //   {
    //     path:"",
    //     component:
    //   },
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAgentRoutingModule { }
