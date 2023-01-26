import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  RegisterForm: FormGroup;


  constructor(
    private router:Router,
    private fb:FormBuilder,
    public authService: AuthService,
    private toast: HotToastService
  ) {

    this.RegisterForm= this.fb.group({
      firstName:[''],
      lastName:[''],
      phone:[''],
      name:[''],
      address:[''],
      email:[''],
      password:['']
    });
  }

  RegisterUser(){
    this.authService.register(this.RegisterForm.value);
  }
  Login(){
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.toast.success("azertyu")
  }



}
