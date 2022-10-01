import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // standalone:true,
  // imports:[
  //   CommonModule,
  //   MatButtonModule

  // ]
})
export class LoginComponent implements OnInit {

  constructor(private readonly router:Router) { }

  login()
  {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
