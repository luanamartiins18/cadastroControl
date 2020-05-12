import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  logoQintess: string = './assets/Qintess-logo-alt.jpg';
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg';
  logoBB: string = './assets/bb-logo.jpg'
  @Input() usuario: Usuario;
  lisPerfil: String;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    let usuAtual: Usuario = changes.usuario.currentValue;
    if (usuAtual != null) {
      for (let perfil of usuAtual.listaPerfil) {
        if (perfil.status == 1) {

          this.lisPerfil = perfil.perfil.descricao;
        }
      }
    }
  }

  deslogaUsuario() {
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }
}
