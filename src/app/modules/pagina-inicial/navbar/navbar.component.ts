import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usuario: Usuario;
  lisPerfil;
  logoQintess: string = './assets/Qintess-logo-alt.jpg';
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg';
  logoBB: string = './assets/bb-logo.jpg'

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }
  ngOnInit() { }

  adm(id: number): boolean {
    return id === 1;
  }
  
  admGestor(id: number): boolean {
    return id === 1 || id === 2;
  }
  
  gestor(id: number): boolean {
    return id === 2;
  }
  
  rh(id: number): boolean {
    return id === 3;
  }
  
  rhGestor(id: number): boolean {
    return id === 3 || id === 2;
  }
  
  colaborador(id: number): boolean {
    return id === 4;
  }


  admRhGestor(id: number): boolean {
    return id ===1 || id === 3 || id === 2 ;
  }
  deslogaUsuario() {
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }
}
