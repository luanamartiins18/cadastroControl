import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';



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

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnChanges() {
  }
  deslogaUsuario() {
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }

  ngOnInit() { }

  admGestor(id: number) {
    return (id == 2 || id == 1);
  }

  gestor(id: number) {
    return (id == 1);
  }

  colaborador(id: number) {
    return (id == 3);
  }
}
