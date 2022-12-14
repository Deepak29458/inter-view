import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogList:any ;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.blogList = this.data.getBlogs();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
