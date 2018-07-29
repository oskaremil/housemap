import { Component, OnInit, Input } from '@angular/core';

export class GridCellConfiguration {
  indexX: number;
  indexY: number;
}

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss']
})
export class GridCellComponent implements OnInit {

  @Input() cellConfig: GridCellConfiguration;

  constructor() { }

  ngOnInit() {
  }

}
