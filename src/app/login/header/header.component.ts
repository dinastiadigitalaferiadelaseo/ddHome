import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public isLogged = false;

  public user: any;

  constructor( private authService: AuthService, private router: Router )  { }

  async  ngOnInit() {
    this.user = await this.authService.getCurrentUser();
    
    if (this.user) {
      this.isLogged = true;
      console.log('User->', this.user);
      this.router.navigate(['/loginHome']);
    }else{
      console.log('usuario no existe')
    }
  }

  onLogin(){
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
  }

  async  validarUser(){
    this.user = await this.authService.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
      this.router.navigate(['/loginHome']);
    }else{
      console.log('usuario no existe')
    }
    if(this.isLogged = true){
      this.router.navigate(['/loginHome']);
    }
    
  }

  


}
