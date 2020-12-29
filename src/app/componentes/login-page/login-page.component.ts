import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthService],
})
export class LoginPageComponent implements OnInit {
  
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  user: SocialUser;
  loggedIn: boolean;

  constructor( private authService: SocialAuthService,  private _router: Router, private AuthSvc: AuthService) { }
  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user.email)
      // if(this.loggedIn = true) {
      //   this._router.navigate(["/admin-home"]);
      //  };
      console.log(user)
      console.log(this.loggedIn)
    });
    
  }
  
  signOut(): void {
    this.authService.signOut();
    
  }
  onLogin(){
    const {email, password} = this.loginForm.value;
    this.AuthSvc.login(email,password);
    console.log('Form->', this.loginForm.value);
    this._router.navigate(["/admin-home"]);
  }
}
