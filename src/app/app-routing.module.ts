import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', loadChildren: () => import('./home-components/home-components.module').then(m => m.HomeComponentsModule)},
  { path: 'detalles-proyecto/:id', loadChildren: () => import('./detalles-proyecto/detalles-proyecto.module').then(m => m.DetallesProyectoModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'mision', loadChildren: () => import('./mision/mision.module').then(m => m.MisionModule)},
  { path: 'vision', loadChildren: () => import('./vision/vision.module').then(m => m.VisionModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule), canActivate: [AngularFireAuthGuard]},
  { path: 'loginHome', loadChildren: () => import('./login-home/login-home.module').then(m => m.LoginHomeModule), canActivate: [AngularFireAuthGuard]},
];

@NgModule({
  imports: [
    QuicklinkModule, 
    RouterModule.forRoot(routes,{ preloadingStrategy: QuicklinkStrategy } ),
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'} ),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }