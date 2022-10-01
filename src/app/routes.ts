import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
      },
    // {
    //   path:'home',
    //   loadChildren:()=>import('./home/home.routes').then(m=>m.homeRoutes)
    // },
    {
      path:'home',
      loadComponent:()=>import('./home/home/home.component').then(m=>m.HomeComponent)
    },
    {
      path:'**',
      redirectTo:"login",
      pathMatch:'full'
    }
  ];
  