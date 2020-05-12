import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  autenticaUsuario(codigoRe, senha, component): any {
    let objComponent = component;
    codigoRe = codigoRe.value;
    senha = CryptoJS.SHA256(senha.value).toString();
    let parametros = { codigoRe: codigoRe, senha: senha };
    return this.http.post(environment.api + "validaUsuario", parametros, { headers: httpOptions.headers, observe: 'response' });
  }

  usuarioEstaLogado() {
    let colaborador = sessionStorage.getItem('colaborador');
    return colaborador === null ? false : true;
  }

  deslogaUsuario() {
    sessionStorage.removeItem('colaborador');
  }
}
