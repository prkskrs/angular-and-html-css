import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:String,password:String){
    if(username=="admin"&&password=="123"){
      return 200;
    }
    else{
      return 403;
    }
  }
}
