import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatListModule
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects:string[]=["Enterprise Products","NEOM","Meridian","GNO"]


  ngOnInit(): void {
  }

}
