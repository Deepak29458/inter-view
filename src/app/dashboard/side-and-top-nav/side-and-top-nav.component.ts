import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/user-account/user-account.service';

@Component({
  selector: 'app-side-and-top-nav',
  templateUrl: './side-and-top-nav.component.html',
  styleUrls: ['./side-and-top-nav.component.css']
})
export class SideAndTopNavComponent implements OnInit {

  constructor(
    public authService: UserAccountService,
  ) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.authService.signOut();
  }

}
