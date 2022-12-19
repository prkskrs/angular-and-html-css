import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
      
  }
  constructor(private router : Router){}
  SelectOption=0;
  data = [{usn:"01fe20bcs302" , name :"Prakash"},{usn:"01fe20bcs209" , name :"Anusha"}]
  action = [{id:0,name:"SELECT DEPARTMENT"},{id:1,name:"CSE"},{id:2,name:"ECE"}]


  display="";
  display1="";
  get(val:string,val1:string){
    this.display = val;
    this.display1 = val1;
  }

}
