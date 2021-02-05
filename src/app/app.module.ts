import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FacebookModule } from "ngx-facebook";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AdminHomeComponent } from './componentes/admin-home/admin-home.component';
import { NavbarLoginComponent } from './componentes/navbar-login/navbar-login.component';
import { NavbarAdminComponent } from './componentes/navbar-admin/navbar-admin.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NavbarLogoutComponent } from './componentes/navbar-logout/navbar-logout.component';
import { ProyectosSistemasComponent } from './componentes/proyectos-sistemas/proyectos-sistemas.component';
import { ChatgeneralComponent } from './componentes/chatgeneral/chatgeneral.component';
import { ProyectosAdministracionComponent } from './componentes/proyectos-administracion/proyectos-administracion.component';
import { AdminHomeAdministracionComponent } from './componentes/admin-home-administracion/admin-home-administracion.component';
import { ConfigAdminComponent } from './componentes/config-admin/config-admin.component';
import { ProyectosconfigAdminComponent } from './componentes/proyectosconfig-admin/proyectosconfig-admin.component';
import { ProyectHomeComponent } from './componentes/proyect-home/proyect-home.component';
import { ResultadosHomeComponent } from './componentes/resultados-home/resultados-home.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    NavbarLoginComponent,
    NavbarAdminComponent,
    LoginPageComponent,
    NavbarLogoutComponent,
    ProyectosSistemasComponent,
    ChatgeneralComponent,
    ProyectosAdministracionComponent,
    AdminHomeAdministracionComponent,
    ConfigAdminComponent,
    ProyectosconfigAdminComponent,
    ProyectHomeComponent,
    ResultadosHomeComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FacebookModule.forRoot(),
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '480702026097-19viqflvotntfpksgd4er5pqav3nefnd.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
