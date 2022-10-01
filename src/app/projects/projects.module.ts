import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import {MatListModule} from '@angular/material/list'



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
  ,
  exports:[MatListModule]
})
export class ProjectsModule {
  static component=ProjectsComponent
 }
