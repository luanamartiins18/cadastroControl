import { Component, OnInit, Input} from '@angular/core';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model'; 

@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  
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
