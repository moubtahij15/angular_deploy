import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent {

  public  test (){
    console.log("abdelghafour ettaqui")
  }

  constructor() {
    this.test();
  }
}
