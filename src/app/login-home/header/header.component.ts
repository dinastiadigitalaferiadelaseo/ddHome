import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {

  public user: any;

  public isLogged = false;

  constructor( private authService: AuthService, private router: Router ) { }

  async ngOnInit(){
    this.user = await this.authService.getCurrentUser();
    if(this.user){
      this.isLogged = true;
    }
    
  }

  logout(){
    this.authService.lotgout();
    this.router.navigate(['/login']);
  }

}
