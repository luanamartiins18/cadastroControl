import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  autenticaUsuario(colaborador, senha){
      
    if(colaborador.value === 're039648' && senha.value === '123456'){

      sessionStorage.setItem('colaborador', colaborador);      
      return true;

    }else{      
      sessionStorage.removeItem('colaborador');
      return false;

    }

  }

  usuarioEstaLogado(){
    
    let colaborador = sessionStorage.getItem('colaborador');
    console.log(colaborador);
    return colaborador === null ? false : true;

  }

  deslogaUsuario(){

    sessionStorage.removeItem('colaborador');

  }


}
