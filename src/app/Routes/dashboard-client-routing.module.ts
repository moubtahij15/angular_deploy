import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardClientComponent} from "../Dashboards/dashboard-client/dashboard-client.component";

const routes: Routes = [
  { path:'',pathMatch:"full",redirectTo:"dashboard"},
  {
    path:"dashboard",
    component: DashboardClientComponent,
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
export class DashboardClientRoutingModule { }
