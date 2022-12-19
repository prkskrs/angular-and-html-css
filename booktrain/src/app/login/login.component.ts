import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
      
  }
  constructor(private router:Router,private auth:AuthService) {

  }

  username="";
  password="";
  error1="";
  error2="";
  error3="";

  login(){
    if(this.username.trim().length===0 && this.password.trim().length===0){
      this.error3 = "All the fields are required";
    }
    else if(this.username.trim().length===0){
      this.error1 = "Username is required."
    }
    else if(this.password.trim().length===0){
      this.error2 = "Password is required."
    }
    else{
      let res = this.auth.login(this.username,this.password);
      if(res==200){
        this.router.navigate(["home"]);
      }
      else{
        alert("Invalid Credentials!")
      }
    }
  }
}
