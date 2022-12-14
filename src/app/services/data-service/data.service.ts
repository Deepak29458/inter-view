import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogs } from 'src/app/common-content/blogs';
import { tableContent, tableContent2 } from 'src/app/common-content/table_data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  testURL = 'https://jsonplaceholder.typicode.com/users'


  constructor(private http: HttpClient) { }

  // Get all Blogs List
  getBlogs(){
    return blogs;
  }

  getAllTableData(){
    return tableContent;
  }

  getAllTable2Data(){
    return tableContent2;
  }

  // Get data from test url
  getData() {
    return this.http.get<any>(this.testURL).pipe(
      map(data => {
        return data.map((item: any) => ({...item, city: item.address.city}))
      }),
    );
  }

}
