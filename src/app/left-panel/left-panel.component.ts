import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  
  @Output() inputText = new EventEmitter<string>();

  
  leftClick(value:any):void{
  this.inputText.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
