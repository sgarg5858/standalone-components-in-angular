import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects:string[]=["Enterprise Products","NEOM","Meridian","GNO"]


  ngOnInit(): void {
  }

}
