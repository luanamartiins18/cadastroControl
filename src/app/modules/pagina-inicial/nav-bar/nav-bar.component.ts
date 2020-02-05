import { Component, OnInit, Input} from '@angular/core';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model'; 
import { UsuarioService } from 'src/app/modules/usuario/usuario.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  logoQintess: string = './assets/Qintess-logo-alt.jpg';
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg';
  @Input() usuario: Usuario;
   
  constructor(private loginService: LoginService,              
              private router: Router) { }

  ngOnInit() {}
  
  deslogaUsuario(){
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }



}
