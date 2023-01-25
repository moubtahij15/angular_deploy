import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path:'',pathMatch:"full",redirectTo:""},
  // {
  //   path:"",
  //   component:,
  //   children:[
  //     {
  //       path:"",
  //       component:
  //     },
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAgentRoutingModule { }
