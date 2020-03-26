import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { HomeParentComponent } from '../home-parent/home-parent.component';
import { LoginService } from '../../usuario/login.service';
import { Router } from '@angular/router';
import { ListagemGuiaComponent } from '../../guia/listagem-guia/listagem-guia.component';


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

  ngOnChanges(changes: SimpleChanges){
    let usuAtual: Usuario = changes.usuario.currentValue;

    if(usuAtual != null){
          
      for(let perfil of usuAtual.listaPerfil){
        if(perfil.status == 1){

          this.lisPerfil = perfil.perfil.descricao;       
        }
      }
      
    }

  }

  deslogaUsuario(){
    this.loginService.deslogaUsuario();
    this.router.navigate(['login']);
  }

  ngOnInit() { }

  admGestor(id){
    return (id == 2 || id == 1);
  }

  gestor(id){
    return (id == 1);
  }

  colaborador(id){
    return (id == 3);
  }


}
