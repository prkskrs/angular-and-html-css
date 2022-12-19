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

  constructor(private router : Router) {
    
  }

  SelectOption=0;
  dataGen = [{train_num:"12345",train_name:"Rajdhani Express",arrv_time:"12:00A.M.",dept_time:"12:30A.M.",seats_available:"2"},
  {train_num:"45678",train_name:"Hubballi Express",arrv_time:"09:00A.M.",dept_time:"09:10A.M.",seats_available:"20"},
  {train_num:"31344",train_name:"Delhi Express",arrv_time:"13:50P.M.",dept_time:"14:00P.M.",seats_available:"213"},
  {train_num:"45345",train_name:"Terminal 22 Express",arrv_time:"15:30P.M.",dept_time:"15:35P.M.",seats_available:"0"},
  {train_num:"01299",train_name:"Shatabdi Express",arrv_time:"19:00P.M.",dept_time:"18:40P.M.",seats_available:"200"},
]

data3A = [{train_num:"12345",train_name:"Rajdhani Express",arrv_time:"12:00A.M.",dept_time:"12:30A.M.",seats_available:"20"},
{train_num:"45678",train_name:"Hubballi Express",arrv_time:"09:00A.M.",dept_time:"09:10A.M.",seats_available:"2"},
{train_num:"31344",train_name:"Delhi Express",arrv_time:"13:50P.M.",dept_time:"14:00P.M.",seats_available:"21"},
{train_num:"45345",train_name:"Terminal 22 Express",arrv_time:"15:30P.M.",dept_time:"15:35P.M.",seats_available:"10"},
{train_num:"01299",train_name:"Shatabdi Express",arrv_time:"19:00P.M.",dept_time:"18:40P.M.",seats_available:"22"},
]

data2A = [{train_num:"12345",train_name:"Rajdhani Express",arrv_time:"12:00A.M.",dept_time:"12:30A.M.",seats_available:"12"},
{train_num:"45678",train_name:"Hubballi Express",arrv_time:"09:00A.M.",dept_time:"09:10A.M.",seats_available:"13"},
{train_num:"31344",train_name:"Delhi Express",arrv_time:"13:50P.M.",dept_time:"14:00P.M.",seats_available:"23"},
{train_num:"45345",train_name:"Terminal 22 Express",arrv_time:"15:30P.M.",dept_time:"15:35P.M.",seats_available:"10"},
{train_num:"01299",train_name:"Shatabdi Express",arrv_time:"19:00P.M.",dept_time:"18:40P.M.",seats_available:"0"},
]

dataSL = [{train_num:"12345",train_name:"Rajdhani Express",arrv_time:"12:00A.M.",dept_time:"12:30A.M.",seats_available:"12"},
{train_num:"45678",train_name:"Hubballi Express",arrv_time:"09:00A.M.",dept_time:"09:10A.M.",seats_available:"122"},
{train_num:"31344",train_name:"Delhi Express",arrv_time:"13:50P.M.",dept_time:"14:00P.M.",seats_available:"12"},
{train_num:"45345",train_name:"Terminal 22 Express",arrv_time:"15:30P.M.",dept_time:"15:35P.M.",seats_available:"40"},
{train_num:"01299",train_name:"Shatabdi Express",arrv_time:"19:00P.M.",dept_time:"18:40P.M.",seats_available:"32"},
]

action = [{id:0,name:"GEN"},{id:1,name:"3A"},{id:2,name:"2A"},{id:3,name:"SL"}]



  check(seat:string){
    console.log(seat)
    if(seat!=="0"){
      alert("Booked Successfully !! Your PNR : 2212123214")
    }
    else{
      alert("Seat Not Available!")
    }
  }
}
