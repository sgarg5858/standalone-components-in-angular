import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills:string[]=["Angular","Nx","Angular Material","Rxjs","Ngrx","Jest","TypeScript","JavaScript","SCSS","CSS3","HTML5","Web Performance","Web Security","Web Accessibilty"]

  ngOnInit(): void {
    
  }

}
