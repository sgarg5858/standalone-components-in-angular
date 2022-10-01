import { Component, createNgModule, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private injector:Injector) { }

  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef|null=null;

  ngOnInit(): void {
  }
  loadSkills()
  {
    import('../../skills/skills.module').then((m)=>{
      const lazyModule = m.SkillsModule;
      const component = lazyModule.component;
      const moduleRef = createNgModule(lazyModule,this.injector);
      if(this.container)
      {
        this.container.createComponent(component,{ngModuleRef:moduleRef});
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
