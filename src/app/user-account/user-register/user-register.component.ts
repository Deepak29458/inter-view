import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserAccountService } from 'src/app/services/user-account/user-account.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm:any = FormGroup;

  constructor(public authService: UserAccountService, 
    private fb:FormBuilder ,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
  });
  }

}
