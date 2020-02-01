import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  logoQintess: string = './assets/Qintess-logo-alt.jpg'
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg'

   
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  deslogaUsuario(){
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }



}
