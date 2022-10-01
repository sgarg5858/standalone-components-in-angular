import { CommonModule } from '@angular/common';
import { Component, createNgModule, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    MatButtonModule
  ]
})
export class HomeComponent implements OnInit {

  constructor(private injector:Injector) { }

  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef|null=null;

  ngOnInit(): void {
  }
  loadSkills()
  {
    import('../../skills/skills/skills.component').then((m)=>{
      const skillsComponent = m.SkillsComponent;
      if(this.container)
      {
        this.container.createComponent(skillsComponent);
      }
    })
  }
  loadProjects()
  {
    import('../../projects/projects.module').then((m)=>{
      const lazyModule = m.ProjectsModule;
      const component = lazyModule.component;
      const moduleRef = createNgModule(lazyModule,this.injector);
      if(this.container)
      {
        this.container.createComponent(component,{ngModuleRef:moduleRef});
      }
    })
  }

}
