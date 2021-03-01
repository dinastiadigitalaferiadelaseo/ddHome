import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './componentes/admin-home/admin-home.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AdminHomeAdministracionComponent } from './componentes/admin-home-administracion/admin-home-administracion.component';
import { ConfigAdminComponent } from './componentes/config-admin/config-admin.component';
import { ProyectHomeComponent } from './componentes/proyect-home/proyect-home.component';
import { ResultadosHomeComponent } from './componentes/resultados-home/resultados-home.component';
import { HomePageComponent } from './homeComponents/home-page/home-page.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent},
  { path: 'login-page', component: LoginPageComponent},
  { path: 'admin-home', component: AdminHomeComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'admin-home-administracion', component: AdminHomeAdministracionComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'config-admin', component: ConfigAdminComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'proyect-home', component: ProyectHomeComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'resultados-home', component: ResultadosHomeComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'add', component: AddTutorialComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }