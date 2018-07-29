import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { FormsModule } from '@angular/forms';
import { AreaGridComponent } from './area-grid/area-grid.component';
import { GridCellComponent } from './grid-cell/grid-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    AreaGridComponent,
    GridCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
