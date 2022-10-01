import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import {MatListModule} from '@angular/material/list'


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[MatListModule]
})
export class SkillsModule {
   static component=SkillsComponent;
 }
