import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router, private nt: NotifierService) { }

  autenticaUsuario(colaborador, senha, component){
    let objComponent = component;

    colaborador = colaborador.value;    
    senha = CryptoJS.SHA256(senha.value).toString();

    let parametros = {re: colaborador, senha: senha};

    let req = this.httpClient. get<any>(environment.api + "validaUsuario", {observe: 'response', params: parametros});
    
    req.subscribe(
      
      data=>{
       
        if(data.status == 200){

          sessionStorage.setItem('colaborador', colaborador); 
          this.router.navigate(['home']); 
          component.senhaErrada = false;
        }
      },

      err => {
        if(err.status == 401){
          component.senhaErrada = true;
          this.nt.notify("error", "Código de usuário ou senha inválido");

        }
      }
      
    );
  }

  usuarioEstaLogado(){
    
    let colaborador = sessionStorage.getItem('colaborador');
    return colaborador === null ? false : true;

  }

  deslogaUsuario(){

    sessionStorage.removeItem('colaborador');

  }


}
