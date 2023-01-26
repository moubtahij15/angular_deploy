import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from "../Pages/register/register.component";
import {CommonModule} from "@angular/common";
import { LoginClientComponent } from "../Pages/login-client/login.component";
import { AuthGuard } from "../Shared/auth.guard";
import {LoginAgentComponent} from "../Pages/login-agent/login-agent.component";

const routes: Routes = [
  {path: '',redirectTo:'/login-client',pathMatch:'full' },
  {
    path: "login",
    component: LoginClientComponent
  },
  {
    path: "loginAgent",
    component: LoginAgentComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path:"dashboard-agent",
    loadChildren:()=>import("../Dashboards/dashboard-agent/dashboard-agent.module").then(m=>m.DashboardAgentModule),
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard-client",
    loadChildren:()=>import("../Dashboards/dashboard-client/dashboard-client.module").then(m=>m.DashboardClientModule),
    canActivate:[AuthGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
