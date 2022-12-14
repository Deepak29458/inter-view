import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  countryColums: string[] = ['position', 'name', 'area'];
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  table2Data:any ;
  dataTable2:any ;

  constructor(
    private service : DataService ,
  ) { }

  ngOnInit(): void {
    this.table2Data = this.service.getAllTable2Data();
    this.dataTable2  = new MatTableDataSource(this.table2Data);
  }

  ngAfterViewInit() {
    this.dataTable2.paginator = this.paginator;
    this.dataTable2.sort = this.sort;
  }

   // Table Filter Funcation
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataTable2.filter = filterValue.trim().toLowerCase();
    if (this.dataTable2.paginator) {
      this.dataTable2.paginator.firstPage();
    }
  }

}
