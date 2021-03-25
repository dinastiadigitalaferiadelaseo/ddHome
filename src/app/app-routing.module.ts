import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', loadChildren: () => import('./home-components/home-components.module').then(m => m.HomeComponentsModule)},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }