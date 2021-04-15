import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [AuthService],
})
export class NavBarComponent implements OnInit {

  
  public isLogged = false;

  public user: any;

  constructor( private authService: AuthService, private _router: Router )  { }

  async  ngOnInit() {
    this.user = await this.authService.getCurrentUser();
    
    if (this.user) {
      this.isLogged = true;
      console.log('User->', this.user);
      this._router.navigate(['/loginHome']);
    }else{
      console.log('usuario no existe')
    }
  }

  logout(){
    this.authService.lotgout();
    this._router.navigate(['/login']);
  }

}
