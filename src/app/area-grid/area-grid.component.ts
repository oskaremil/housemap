import { Component, OnInit, Input } from '@angular/core';
import { GridCellConfiguration } from '../grid-cell/grid-cell.component';

export class AreaGridTemplate{
    valueX: number;
    valueY: number;
}

@Component({
    selector: 'app-area-grid',
    templateUrl: './area-grid.component.html',
    styleUrls: ['./area-grid.component.scss']
})
export class AreaGridComponent implements OnInit {
    private _template: AreaGridTemplate;
    
    cells: GridCellConfiguration[][];

    constructor() { }
    
    @Input() set template(val: AreaGridTemplate) {
        this._template = val;
        this.drawTemplate(val);
    }

    get template(): AreaGridTemplate {
        return this._template;
    }

    ngOnInit() {
    }

    drawTemplate(val: AreaGridTemplate) {
        if (val == undefined || !(val.valueY > 0) || !(val.valueX > 0)) {
            return;
        }

        this.cells = [];
        for(let i = 0; i < val.valueY; i++){
            this.cells[i] = [];
            for(let j = 0; j < val.valueX; j++){
                this.cells[i][j]={
                    indexX: j,
                    indexY: i
                };
            }
        }
    }

}
