import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  minValue: 4;
  maxValue: 100;
  constructor() { }

  ngOnInit() {
  }

  get isValidArea: boolean{
      
  }

}
