import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './componentes/admin-home/admin-home.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent},
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AngularFireAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }