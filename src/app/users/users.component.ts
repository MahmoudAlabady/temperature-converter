import { Component, OnInit } from '@angular/core';
import { Movies } from './moviesModel';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
title:string = 'hello';
  
  gitname():string {
    return `mahmoud ${this.title}`
  }
  description: string='lara good';
  color:string = 'red';
  enalble:boolean = true;
  img:string = '../../assets/images/im.jpg'
  hover(){
    this.title = 'hmoud';
  }
  onkeyup(event:any){
    // console.log(event)
    if(event.keyCode){console.log(event.target.value)}
  
  }
  counter:number = 0;
  onclick(){
    this.counter+=1;
    

  }
  value?:string;
  items:string[] = ['hoda','nvd','dffj']
  movies:Movies[]=[
    {title:'FAST',actor:'adel',year:2021},
    {title:'moon',actor:'mo',year:1568},
    {title:'sun',actor:'ta',year:3133},
    {title:'rise',actor:'de',year:548}
  ]
  num:number=0;
  show?:boolean;
  isNotSelected:boolean=true;
  //////////////////////////////////
  movies1:Movies[]= [];
  movTitle:string = "";
  MovActor:string = "";
  MovYear:number = 0;
  
  add(){
    this.movies1.push({title:this.movTitle,actor:this.MovActor,year:this.MovYear})
  }
  refresh(){
    this.movies1=[
    {title:'fast',actor:'adel',year:2021},
    {title:'moon',actor:'mo',year:1568},
    {title:'sun',actor:'ta',year:3133},
    {title:'rise',actor:'de',year:548}
    ]
  }
  deletee(item_pos:number){
    this.movies1.splice(item_pos,1)
    
  }
  currentDate:Date = new Date();
  
  obj = {
    a:"hoda",
    b:"loda",
    c:"doda"
  }
  fahrenhiet:number = 0;
  celsius:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.refresh()
  }

}
