import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  
  usuarioLogado() {
    let colaborador = sessionStorage.getItem('Analista administrativo JR');
    return colaborador === null ? false : true;
  }

  deslogaUsuario() {
    sessionStorage.removeItem('Analista administrativo JR');
  }

  autenticaUsuario(codigoRe, senha): any {
    codigoRe = codigoRe.value;
    senha = CryptoJS.SHA256(senha.value).toString();
    let parametros = { codigoRe: codigoRe, senha: senha };
    return this.http.post(environment.api + "validaUsuario", parametros, { headers: httpOptions.headers, observe: 'response' });
  }
}
