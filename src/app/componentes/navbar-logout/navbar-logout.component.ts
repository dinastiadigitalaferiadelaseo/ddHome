import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.scss'],
  providers: [AuthService]
})
export class NavbarLogoutComponent implements OnInit {
  public user: any;
  
  constructor( private AuthSvc: AuthService, private _router: Router, public afAuth: AngularFireAuth) { }
  async ngOnInit() {
    this.user = await this.AuthSvc.getCurrentUser();
    console.log(this.user);
  }
  

  signOut(): void {
    this.afAuth.signOut();
    this._router.navigate(["/login-page"]);
  }

}

