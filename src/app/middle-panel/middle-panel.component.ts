import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-panel',
  templateUrl: './middle-panel.component.html',
  styleUrls: ['./middle-panel.component.scss']
})
export class MiddlePanelComponent implements OnInit {

  constructor() { }
   text = "Unknown";
  ngOnInit(): void {
  }
  displayText(text:any) {
    this.text = text;
}
}
