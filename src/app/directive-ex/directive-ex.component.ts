import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ex',
  templateUrl: './directive-ex.component.html',
  styleUrls: ['./directive-ex.component.scss']
})
export class DirectiveExComponent implements OnInit {

  items = [
   {'name':"Domenic","points":"88,110",'team':"dcode"},
   {'name':"Sally","points":"72,400",'team':"Students"},
   {'name':"Nick","points":"52,300",'team':"dcode"},
  ]
  constructor() { }
  ngOnInit(): void {
  }
  add(name:any,points:any,team:any){
  this.items.push({'name':name.value,"points":points.value,"team":team.value})
  }
}
