import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  @Output() inputText = new EventEmitter<string>();

  
  rightClick(value:any):void{
  this.inputText.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
