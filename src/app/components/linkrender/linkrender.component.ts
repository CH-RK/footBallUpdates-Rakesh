import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-linkrender',
  templateUrl: './linkrender.component.html',
  styleUrls: ['./linkrender.component.css'],
})
export class LinkrenderComponent {
  public cellValue!: any;
  refresh(params: ICellRendererParams) {}

  agInit(params: ICellRendererParams) {
    this.cellValue = params.data;
  }
}
