import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoQintess: string = './assets/Qintess-logo-alt.jpg';
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg';
  logoBB: string = './assets/bb-logo.jpg'
  @Input() usuario: Usuario;
  lisPerfil: String;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deslogaUsuario() {
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }
}
