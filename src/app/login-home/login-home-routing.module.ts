import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomePageComponent } from './login-home-page/login-home-page.component';

const routes: Routes = [
  {
    path: '', component: LoginHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginHomeRoutingModule { }
