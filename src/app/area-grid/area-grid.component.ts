import { Component, OnInit, Input } from '@angular/core';

export class AreaGridTemplate{
    valueX: number;
    valueY: number;
}

@Component({
    selector: 'app-area-grid',
    templateUrl: './area-grid.component.html',
    styleUrls: ['./area-grid.component.css']
})
export class AreaGridComponent implements OnInit {
    private _template: AreaGridTemplate;
    constructor() { }
    @Input() set template(val: AreaGridTemplate) {
        this._template = val;
    }

    get template(): AreaGridTemplate {
        return this._template;
    }

    ngOnInit() {
    }

}
