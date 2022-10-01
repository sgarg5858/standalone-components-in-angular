import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatListModule
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills:string[]=["Angular","Nx","Angular Material","Rxjs","Ngrx","Jest","TypeScript","JavaScript","SCSS","CSS3","HTML5","Web Performance","Web Security","Web Accessibilty"]

  ngOnInit(): void {
    
  }

}
