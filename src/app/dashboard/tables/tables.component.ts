import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { setFilterBy } from 'src/app/@ngrx/data-table';
import { DataTableState } from 'src/app/models/data-table';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tableData:any;
  dataSource :any ;

  data$:any;
  headerRow = [
    { displayName: 'ID', key: 'id', hasSort: false },
    { displayName: 'Name', key: 'name', hasSort: true },
    { displayName: 'Username', key: 'username', hasSort: false },
    { displayName: 'City', key: 'city', hasSort: true },
  ];

  searchControl = new FormControl('')

  constructor(
    private service : DataService ,
    private store: Store<DataTableState>
  ) { }

  ngOnInit(): void {
    this.tableData = this.service.getAllTableData();
    this.dataSource = new MatTableDataSource(this.tableData);
    this.data$ = this.service.getData().pipe(
      startWith(null),
    );
    this.searchControl.valueChanges.pipe(
      map((query:any) => query.toLowerCase())
    ).subscribe((query) => {
      console.log(query)
      this.store.dispatch(setFilterBy({ filters: { filterBy: ['name', 'city'], query } }));
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   // Table Filter Funcation
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
