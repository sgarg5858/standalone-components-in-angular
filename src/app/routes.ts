import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
      },
    {
      path:'home',
      loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'**',
      redirectTo:"login",
      pathMatch:'full'
    }
  ];
  