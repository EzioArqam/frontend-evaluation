import { NgFor } from '@angular/common';
import { Component, ErrorHandler, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
@Input() gridNumbers: number[] = [];

}
