import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[
    LoginModule,
    RouterModule
  ]
})
export class AppComponent {
  title = 'standalone-components';
}
