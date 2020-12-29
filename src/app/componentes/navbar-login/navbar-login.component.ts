import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.scss'],
  providers: [AuthService]
})
export class NavbarLoginComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(private AuthSvc: AuthService, private _router: Router, public afAuth: AngularFireAuth) { }

  async ngOnInit() {
    console.log("Navbar");
    this.user = await this.AuthSvc.getCurrentUser();
    if(this.user){
      this.isLogged = true;
      console.log("User->", this.user);
      console.log(this.isLogged)
    }
  }

  

  signOut(): void {
    this.afAuth.signOut();
    if(this.isLogged = false){
      this._router.navigate(["/login-page"]);
    }
    
  }

}
