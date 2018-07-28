import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AreaGridTemplate } from '../area-grid/area-grid.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  areaGridTemplate: AreaGridTemplate;
  valueX = 20;
  valueY = 20;

  constructor() { }

  ngOnInit() {
  }

  get isValidArea(): boolean {
    const val =  this.valueX >= environment.areaMinValue && this.valueX <= environment.areaMaxValue
        && this.valueY >= environment.areaMinValue && this.valueY <= environment.areaMaxValue;
    return val;
  }

  get maxValue(): number {
      return environment.areaMaxValue;
  }

  get minValue(): number {
      return environment.areaMinValue;
  }

  generateTemplateArea() {
      this.areaGridTemplate = {
          valueX: this.valueX,
          valueY: this.valueY
      };
  }

}
