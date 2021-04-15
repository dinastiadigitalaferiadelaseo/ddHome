import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

  onRegister(){
    const {email, password} = this.registerForm.value;
    this.authService.register(email, password);
    console.log('Form->', this.registerForm.value)
  }

}
