import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataTableState, HeaderRowItem } from 'src/app/models/data-table';
import * as dataTableSelectors from 'src/app/@ngrx/data-table/data-table.selectors';
import * as dataTableActions from 'src/app/@ngrx/data-table';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {

  @Input() data!: any[];
  @Input() headerRow!: HeaderRowItem[];

  public sortDirection$!: Observable<string>;
  public sortKey$!: Observable<string>;
  public tableData$!: Observable<any>;

  constructor(
    private store: Store<DataTableState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(dataTableActions.setData({ data: this.data }));
    this.tableData$ = this.store.select(dataTableSelectors.selectData);
    this.sortKey$ = this.store.select(dataTableSelectors.selectSortKey);
    this.sortDirection$ = this.store.select(dataTableSelectors.selectSortDirection);
  }

  ngOnDestroy(): void {
    this.store.dispatch(dataTableActions.resetDataTableStore());
  }

  public onSort(headerItem: HeaderRowItem): void {
    if (!headerItem.hasSort) {
      return;
    }
    const sortKey = headerItem.key;
    this.store.dispatch(dataTableActions.setSortKey({ sortKey: sortKey }));
  }

}
