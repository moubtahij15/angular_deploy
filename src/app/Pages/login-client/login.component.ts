import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-client',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginClientComponent {

  role : string = "Client";

}
