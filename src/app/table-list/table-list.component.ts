import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true
    }
  }

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" },
  { field: "make" }, { field: "model" }, { field: "price" }, { field: "price" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  ngOnInit() {
  }

}
