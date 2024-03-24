import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { UserInputComponent } from '../user-input/user-input.component';
interface GridData {
  gridNumbers: number[];
}
@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [UserInputComponent,GridComponent],
  templateUrl: './main-content-area.component.html',
  styleUrl: './main-content-area.component.scss',
})
export class MainContentAreaComponent {
gridNumbers: number[] = [];
loadGrid: boolean =false;
onGridGenerationInvoked(data: GridData){
  this.gridNumbers = data.gridNumbers;
  this.loadGrid = true;
}
}
